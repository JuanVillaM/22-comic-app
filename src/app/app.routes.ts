import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/shared/home/home.component';
import { SearchComponent } from './components/search/search.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
    // { path: '**', component: PageNotFoundComponent },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
