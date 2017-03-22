import {Component, OnInit} from '@angular/core';

import {Hero} from './hero.service';
import {HeroService} from './hero.service';
import {Router, ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    template: `
    <h2>Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
    styleUrls: ['./hero-list.component.css'],
    providers: [HeroService]
})
export class HeroListComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    private selectedId: number;

    constructor(private heroService: HeroService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.heroService.getHeroes();
            })
            .subscribe((heroes: Array<Hero>) => this.heroes = heroes);


    }

    onSelect(hero: Hero): void {
        this.router.navigate(["/hero", hero.id]);
    }

    isSelected(hero: Hero) {
        return hero.id === this.selectedId;
    }
}
