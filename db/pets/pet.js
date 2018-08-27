import Pet from './index';
import { addLikeForTodayToPetById } from '../petlikes/petLike';
import db from '../index';

// const saveAnimal = (pet, { user, point }) => Pet.forge({ ...pet, userId: user, point }).save();

const updateAnimal = async (petAttributes, { id }, { user }) => {
  const pet = await Pet.where({ id }).fetch();
  if (pet.attributes.userId === user) {
    await pet.set(petAttributes).save();
  }
};

const getAnimal = ({ id }) => Pet.where({ id }).fetch();

const saveAnimal = pet => {
  const petSchema = {
    name: pet.name,
    adoptable: pet.adoptable ? pet.adoptable : false,
    likecounter: pet.likecounter ? pet.likeCounter : 0,
    breed: pet.breed,
    description: pet.description,
    age: pet.age,
    picture: pet.picture,
    point: db.knex.raw(`ST_SetSRID(ST_Point(${pet.longitude},${pet.latitude}) , 4326)`),
  };
  Pet.forge(petSchema).save();
};

const getAnimals = () =>
  Pet.query(qb => {
    qb.select('*');
    qb.orderByRaw('random()');
    qb.limit(3);
  }).fetchAll();

const getAnimalsByUserId = (body, { user }) => Pet.where({ userId: user }).fetchAll();

const addLikeToPet = async ({ id }) => {
  const pet = await Pet.where({ id }).fetch();
  await pet.set('likeCounter', pet.attributes.likeCounter + 1).save();
  await addLikeForTodayToPetById(id);
};

const getClosestPets = () => {
  return db.knex
    .raw(
      `
    select id,name,adoptable,breed,likecounter,age,description,picture,st_distance(ST_transform(ST_GeomFromText('POINT(-76.1252542827257 39.2630145884694)', 4326),2163), ST_Transform(pets.point,2163)) as distance from pets
    where ST_Dwithin(ST_transform(ST_GeomFromText('POINT(-76.1252542827257 39.2630145884694)', 4326),2163), ST_Transform(pets.point,2163), 100000) 
    ORDER BY random()`
    )
    .then(data => {
      return data.rows;
    });
};

export { saveAnimal, updateAnimal, getAnimal, getAnimals, getAnimalsByUserId, addLikeToPet, getClosestPets };
