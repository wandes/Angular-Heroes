import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes : Array<any>;

  
  constructor(private service : HeroesService) {}

  ngOnInit() {
    this.service.listHeroes()
    .subscribe(dados => this.heroes = dados);
  }
}
