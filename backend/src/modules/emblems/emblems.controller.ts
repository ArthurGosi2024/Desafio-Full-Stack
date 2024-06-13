import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { EmblemsService } from './emblems.service';
import { GetByEmblemsDTO } from './DTOs/get-by-emblems-dtos';
import { CreatePackageEmblemsDTO } from './DTOs/create-package-emblems';
import { AuthGuard } from 'src/auth.guard';
import { DeletePackageEmblemsDTO } from './DTOs/delete-package-emblems';
import { ThrottlerGuard } from '@nestjs/throttler';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@UseGuards(ThrottlerGuard)
@UseGuards(AuthGuard)
@ApiTags('Emblems - Endpoints para gerenciamento de emblemas')
@Controller('emblems')
export class EmblemsController {
  constructor(private readonly emblemsService: EmblemsService) {}

  @ApiOperation({ summary: 'Criar emblema do usuário' })
  @ApiBody({ type: CreatePackageEmblemsDTO })
  @ApiResponse({
    status: 201,
    description: 'Emblema do usuário criados com sucesso.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiBadRequestResponse({
    description: 'Erro de validação ou requisição inválida.',
  })
  @Post('createUserEmblems')
  async createUserEmblems(@Body() packageEmblems: CreatePackageEmblemsDTO) {
    return await this.emblemsService.createEmblemsUser(packageEmblems);
  }

  @ApiOperation({ summary: 'Obter todos os emblemas' })
  @ApiResponse({ status: 200, description: 'Lista de todos os emblemas.' })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({
    status: 404,
    description: 'Não foi encontrado, nenhum emblema.',
  })
  @Get('getAllEmblems')
  async getAllEmblems() {
    return await this.emblemsService.getAllEmblems();
  }

  @ApiOperation({ summary: 'Obter emblemas por slug' })
  @ApiBody({ type: GetByEmblemsDTO })
  @ApiParam({
    name: 'slug',
    type: 'string',
    description: 'Slug associado ao emblema',
  })
  @ApiResponse({ status: 200, description: 'Emblema encontrado.' })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 404, description: 'Emblema não encontrado.' })
  @Get('getByEmblems/:slug')
  async getByEmblems(@Param('slug') { slug }: GetByEmblemsDTO) {
    return await this.emblemsService.getByEmblems(slug);
  }

  @ApiOperation({ summary: 'Remover emblema do usuário' })
  @ApiBody({ type: DeletePackageEmblemsDTO })
  @ApiResponse({
    status: 202,
    description: 'Emblema do usuário removidos com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Emblema do usuário não encontrado.',
  })
  @ApiBadRequestResponse({
    description: 'Erro de validação ou requisição inválida.',
  })
  @Post('deleteByEmblem')
  async removerEmblemsUser(@Body() packageEmblems: DeletePackageEmblemsDTO) {
    return await this.emblemsService.removerEmblemsUser(packageEmblems);
  }
}
