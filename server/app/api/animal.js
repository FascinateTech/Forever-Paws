import { Router } from 'express';
import { postRes } from '../utils/utils';
import { saveAnimal, getIncrementCount } from '../../../db/pets/pet';

const animal = Router();

animal.route('/').post(postRes(saveAnimal));

animal.route('/addLike').post(postRes(getIncrementCount));

export default animal;