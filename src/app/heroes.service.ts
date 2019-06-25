import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl = 'https://api-heroes17.herokuapp.com/heroes';
  
  constructor(private http : HttpClient) { }

  listHeroes(){
    return this.http.get<any[]>(`${this.heroesUrl}`);
  }
}
