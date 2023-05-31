import { Test, TestingModule } from '@nestjs/testing';
import { PersonalAdministrativoService } from './personal-administrativo.service';

describe('PersonalAdministrativoService', () => {
  let service: PersonalAdministrativoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalAdministrativoService],
    }).compile();

    service = module.get<PersonalAdministrativoService>(PersonalAdministrativoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
