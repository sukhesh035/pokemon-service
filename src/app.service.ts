import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  async getPokemonByName(name) {
    return await this.httpService
      .get(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      )
      .toPromise();
  }
  constructor(private httpService: HttpService) {}
  async getPokemonList(limit, offset) {
    return await this.httpService
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
          offset
        }`,
      )
      .toPromise();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
