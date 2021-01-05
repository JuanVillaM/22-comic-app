import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  text: string;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private heroesService: HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.text = params['text'];
      this.heroes = this.heroesService.searchHeroes(params['text']);
    });
  }

  seeHero( id: number ){
    this.router.navigate([ '/hero', id ]);
  }

}
