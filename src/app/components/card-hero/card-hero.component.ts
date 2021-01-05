import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styles: [
  ]
})
export class CardHeroComponent implements OnInit {

  @Input() hero: any = {};
  @Input() id: number;

  @Output() selectedHero: EventEmitter<number>;

  constructor( private router: Router ) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {
  }

  seeHero(){
    this.router.navigate([ '/hero', this.id ]);
    // this.selectedHero.emit(this.id);
  }
}
