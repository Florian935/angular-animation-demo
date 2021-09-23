import {
    animate,
    keyframes,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-transition-with-boolean',
    templateUrl: './transition-with-boolean.component.html',
    styleUrls: ['./transition-with-boolean.component.scss'],
    animations: [
        trigger('openClose', [
            state(
                'true',
                style({
                    height: '200px',
                    backgroundColor: 'red',
                })
            ),
            state(
                'false',
                style({
                    height: '100px',
                    backgroundColor: 'blue',
                })
            ),
            transition('true <=> false', [animate(500)]),
        ]),
    ],
})
export class TransitionWithBooleanComponent {
    isOpen = false;

    constructor() {}

    toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
