import { container } from 'tsyringe';

import { ICatetegoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import CategoriesRepository from '../../modules/cars/repositories/implementations/CategoriesRepository';

container.registerSingleton<ICatetegoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
