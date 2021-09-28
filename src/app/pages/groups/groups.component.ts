import {
    animate,
    group,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { HEROES } from 'src/app/shared';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
    animations: [
        trigger('flyInOut', [
            state(
                'in',
                style({
                    width: 120,
                    opacity: 1,
                })
            ),
            transition(':enter', [
                style({
                    width: 10,
                    transform: 'translateX(50px)',
                    opacity: 0,
                }),
                group([
                    animate(
                        '0.3s 0.1s ease',
                        style({
                            transform: 'translateX(0)',
                            width: 120,
                        })
                    ),
                    animate(
                        '0.3s ease',
                        style({
                            opacity: 1,
                        })
                    ),
                ]),
            ]),
            transition(':leave', [
                group([
                    animate(
                        '0.3s 0.2s ease',
                        style({
                            opacity: 0,
                        })
                    ),
                    animate(
                        '0.3s ease',
                        style({
                            transform: 'translateX(50px)',
                            width: 10,
                        })
                    ),
                ]),
            ]),
        ]),
    ],
})
export class GroupsComponent {
    heroes = HEROES.slice();
    nextId = 20;

    onRemove(id: number | string): void {
        this.heroes = this.heroes.filter((hero) => hero.id !== id);
    }

    onAdd(): void {
        this.heroes = [...this.heroes, { id: this.nextId, name: 'Hero' }];
        this.nextId++;
    }
}
