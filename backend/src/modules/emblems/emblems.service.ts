import { Injectable } from '@nestjs/common';
import { EmblemsRepositories } from './emblems.repositories';

@Injectable()
export class EmblemsService {
  constructor(private readonly emblemsRepositories: EmblemsRepositories) {}

  async createEmblems(): Promise<boolean> {
    return false;
  }
  async updateAllElements(): Promise<boolean> {
    return false;
  }
}

// criar novos emblemas

// atualizar todos os emblemas
// listar todos os emblems
