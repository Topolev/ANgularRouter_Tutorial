import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {CrisisService, Crisis} from "./crisis.service";

@Component({
    moduleId: module.id,
    template: `
    <h2>Crises</h2>
    <ul class="heroes">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
    <router-outlet></router-outlet>

  `,
    styleUrls: ['crisis-list.component.css'],
    providers: [CrisisService]
})
export class CrisisListComponent implements OnInit {
    title = 'Tour of Heroes';
    crises: Crisis[];
    selectedCrisis: Crisis;
    private selectedId: number;

    constructor(private crisisService: CrisisService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    getCrises(): void {
        this.crisisService.getCrises().then(crises => this.crises = crises);
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.crisisService.getCrises();
            })
            .subscribe((crises: Array<Crisis>) => this.crises = crises);


    }

    onSelect(crisis: Crisis): void {
        this.router.navigate(["/crisis-center", crisis.id]);
    }

    isSelected(crisis: Crisis) {
        return crisis.id === this.selectedId;
    }
}
