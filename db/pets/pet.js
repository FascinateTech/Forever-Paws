import Pet from './index';

const saveAnimal = pet => Pet.forge(pet).save();

const getAnimals = () =>
  Pet.query(qb => {
    qb.select('*');
    qb.orderByRaw('random()');
    qb.limit(3);
  }).fetchAll();

// get like count for Pet
const fetchLikeCount = (id) =>
  Pet.query(qb => {
    qb.select('likeCounter').where('id','=',id)
  }).fetchAll();

// increment Pet's like count
const incrementLikeCount = (id, lastCount) => 
  Pet.query(qb => {
    qb.where('id','=',id).update({
      likeCounter: lastCount+1})
  }).fetchAll()  

// Get and increment Pet's like count
const getIncrementCount = ({id}) => fetchLikeCount(id).then((data)=>incrementLikeCount(id,data.toJSON()[0].likeCounter));

export { saveAnimal, getAnimals, getIncrementCount };

