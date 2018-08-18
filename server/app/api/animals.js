import { Router } from 'express';
import { getRes } from '../utils/utils';
import { getAnimals } from '../../../src/helpers';

const animals = Router();

animals.route('/').get(getRes({ animals: getAnimals }));

export default animals;
