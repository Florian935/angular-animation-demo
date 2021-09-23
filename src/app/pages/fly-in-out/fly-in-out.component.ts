import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-fly-in-out',
    templateUrl: './fly-in-out.component.html',
    styleUrls: ['./fly-in-out.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(500),
            ]),
            transition('* => void', [
                animate(200, style({ transform: 'translateX(100%)' })),
            ]),
        ]),
    ],
})
export class FlyInOutComponent {
    quotes = ['lorem', 'ipsum', 'hola'];
    increment = 1;

    constructor() {}

    onAdd(): void {
        this.quotes = [...this.quotes, `another quote ${this.increment}`];
        this.increment++;
    }

    onRemove(quote: string): void {
        this.quotes = this.quotes.filter((q: string) => q !== quote);
    }
}
