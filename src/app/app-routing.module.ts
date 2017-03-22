
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HeroListComponent} from "./heroes/hero-list.component";
import {PageNotFoundComponent} from "./not-found.component";

const appRoutes: Routes = [
    { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}