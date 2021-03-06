import {
    animate,
    query,
    stagger,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Hero, HEROES } from 'src/app/shared';

@Component({
    selector: 'app-increment-decrement-stagger',
    templateUrl: './increment-decrement-stagger.component.html',
    styleUrls: ['./increment-decrement-stagger.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('form, .hero', [
                    style({ opacity: 0, transform: 'translateY(-100px)' }),
                    stagger(-30, [
                        animate(
                            '500ms cubic-bezier(0.35, 0, 0.25, 1)',
                            style({ opacity: 1, transform: 'none' })
                        ),
                    ]),
                ]),
            ]),
        ]),
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
    // La directive @HostBinding permet de lier des propriétés entre
    // le component.ts et le HTML
    // Par exemple, ici, l'animation @pageAnimations est ajouté directement
    // en tant que directive sur la balise <app-increment-decrement-stagger>
    @HostBinding('@pageAnimations')
    animatePage = true;

    // De la même façon, on ajoute ici la classe 'class-test' à
    // la balise <app-increment-decrement-stagger>
    @HostBinding('class') class = 'class-test';

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
