import {
    animate,
    query,
    stagger,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Hero, HEROES } from 'src/app/shared';

@Component({
    selector: 'app-increment-decrement-stagger',
    templateUrl: './increment-decrement-stagger.component.html',
    styleUrls: ['./increment-decrement-stagger.component.scss'],
    animations: [
        trigger('filterAnimation', [
            transition(':enter, * => 0, * => -1', []),
            transition(':increment', [
                query(
                    ':enter',
                    [
                        style({ opacity: 0, width: '0px' }),
                        stagger(50, [
                            animate(
                                '300ms ease-out',
                                style({ opacity: 1, width: '*' })
                            ),
                        ]),
                    ],
                    { optional: true }
                ),
            ]),
            transition(':decrement', [
                query(':leave', [
                    stagger(50, [
                        animate(
                            '300ms ease-out',
                            style({ opacity: 0, width: '0px' })
                        ),
                    ]),
                ]),
            ]),
        ]),
    ],
})
export class IncrementDecrementStaggerComponent implements OnInit {
    heroTotal = -1;
    private _heroes: Array<Hero> = [];

    constructor() {}

    ngOnInit(): void {
        this._heroes = HEROES;
    }

    get heroes(): Array<Hero> {
        return this._heroes;
    }

    updateCriteria(criteria: string): void {
        criteria = criteria ? criteria.trim() : '';

        this._heroes = HEROES.filter((hero) =>
            hero.name.toLowerCase().includes(criteria.toLowerCase())
        );

        const newTotal = this._heroes.length;

        if (this.heroTotal !== newTotal) {
            this.heroTotal = newTotal;
        } else if (!criteria) {
            this.heroTotal = -1;
        }
    }
}
