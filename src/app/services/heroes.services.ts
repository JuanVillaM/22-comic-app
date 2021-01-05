import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    
    private heroes: Heroe[] = [
        {
            name: "Aquaman",
            bio: "Aquaman's most recognized power is the telepathic ability to communicate with marine life, which it can summon over great distances.",
            img: "assets/img/aquaman.png",
            appearance: "1941-11-01",
            house: "DC"
        },
        {
            name: "Batman",
            bio: "The main features of Batman are summarized in 'physical prowess, deductive skills and obsession'. Most of the basic characteristics of the comics have varied by the different interpretations that have been given to the character.",
            img: "assets/img/batman.png",
            appearance: "1939-05-01",
            house: "DC"
        },
        {
            name: "Daredevil",
            bio: "Having lost his sight, Daredevil's remaining four senses were heightened by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can see through a sixth sense that serves as a radar similar to that of bats. ",
            img: "assets/img/daredevil.png",
            appearance: "1964-01-01",
            house: "Marvel"
        },
        {
            name: "Hulk",
            bio: "His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).",
            img: "assets/img/hulk.png",
            appearance: "1962-05-01",
            house: "Marvel"
        },
        {
            name: "Green Lantern",
            bio: "Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is fueled by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a lamp maker named Chang found) ",
            img: "assets/img/linterna-verde.png",
            appearance: "1940-06-01",
            house: "DC"
        },
        {
            name: "Spider-Man",
            bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Man's strength allows him to lift 10 tons or more. Thanks to this great strength Spider-Man he can perform incredible jumps. A spider sense , which lets him know if danger is looming over him, before it happens. Sometimes this can lead Spider-Man to the source of danger. ",
            img: "assets/img/spiderman.png",
            appearance: "1962-08-01",
            house: "Marvel"
          },
        {
            name: "Wolverine",
            bio: "In the fictional universe of Marvel, Wolverine possesses regenerative powers that can heal any wound, no matter how deadly it may be, and that same power makes him immune to any disease existing on Earth and some extraterrestrials. He also possesses superhuman strength , which, although it does not compare with that of other superheroes like the Hulk, does surpass that of any human. ",
            img: "assets/img/wolverine.png",
            appearance: "1974-11-01",
            house: "Marvel"
        },
        {
            name: "Juan Villa",
            bio: "Hello, I'm Juan Villa a normal man who was bitten by a PC and now I'm a Web Developer",
            img: "assets/img/juan-villa.jpg",
            appearance: "2004-03-27",
            house: "Marvel"
        }
      ];

    constructor(){}

    getHeroes(){
        return this.heroes;
    }

    getHeroe( id: string ){
        return this.heroes[id];
    }

    searchHeroes( text: string ): Heroe[]{
        let heroesArr: Heroe[] = [];
        text = text.toLowerCase();

        for( let i = 0; i < this.heroes.length; i++ ){
            let hero = this.heroes[i];
            let name = hero.name.toLowerCase();

            if( name.indexOf( text ) >= 0 ){
                hero.idx = i; 
                heroesArr.push(hero);
            };

        };

        return heroesArr;

    };
};


export interface Heroe {
    img: string;
    bio: string;
    name: string;
    idx?: number;  
    house: string;  
    appearance: string;
}