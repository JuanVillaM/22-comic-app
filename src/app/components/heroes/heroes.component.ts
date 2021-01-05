import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router ) {
    console.log('Service Ready!');
   }

  ngOnInit(){
    this.heroes = this.heroesService.getHeroes();
  }

  seeHero( id: number ){
    this.router.navigate([ '/hero', id ]);
  }
}
