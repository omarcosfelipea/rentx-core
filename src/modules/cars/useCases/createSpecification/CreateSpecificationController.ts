import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpecificatonUseCase = container.resolve(
      CreateSpecificationUseCase,
    );

    await createSpecificatonUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
