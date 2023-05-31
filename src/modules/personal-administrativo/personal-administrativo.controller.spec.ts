import { Test, TestingModule } from '@nestjs/testing';
import { PersonalAdministrativoController } from './personal-administrativo.controller';

describe('PersonalAdministrativoController', () => {
  let controller: PersonalAdministrativoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalAdministrativoController],
    }).compile();

    controller = module.get<PersonalAdministrativoController>(PersonalAdministrativoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
