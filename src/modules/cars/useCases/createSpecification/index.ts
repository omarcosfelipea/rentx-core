import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = new SpecificationRepository();

const createSpecificatonUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificatonUseCase,
);

export { createSpecificationController };
