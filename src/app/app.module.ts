import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {AppComponent} from "./app.component";
import {Routes, RouterModule} from "@angular/router";
import {CrisisListComponent} from "./crisis-list.component";
import {HeroListComponent} from "./hero-list.component";
import {PageNotFoundComponent} from "./not-found.component";


const appRoutes: Routes = [
    {path: 'crisis-center', component: CrisisListComponent},
    {path: 'heroes', component: HeroListComponent},
    { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HeroListComponent,
        CrisisListComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
