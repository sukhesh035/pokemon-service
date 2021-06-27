import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('getPokemonList')
  async getPokemonList(
    @Query('Limit') limit: number,
    @Query('Offset') offset: number,
  ) {
    const res = await this.appService.getPokemonList(limit, offset);
    return res.data;
  }

  @Get('getPokemonByName')
  async getPokemonByName(
    @Query('Name') name: String,
  ) {
    const res = await this.appService.getPokemonByName(name);
    return res.data;
  }
}
