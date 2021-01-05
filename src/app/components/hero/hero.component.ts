import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.services';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent {

  hero: any = {};

  constructor( private activatRoute: ActivatedRoute, private heroesService: HeroesService ) {

    this.activatRoute.params.subscribe( params => {
      this.hero = this.heroesService.getHeroe(params['id']);
    });

  };

}
