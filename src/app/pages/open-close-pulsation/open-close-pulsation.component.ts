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
    selector: 'app-open-close-pulsation',
    templateUrl: './open-close-pulsation.component.html',
    styleUrls: ['./open-close-pulsation.component.scss'],
    animations: [
        trigger('openClose', [
            state(
                'open',
                style({
                    height: '200px',
                    opacity: 1,
                    backgroundColor: 'yellow',
                })
            ),
            state(
                'close',
                style({
                    height: '100px',
                    opacity: 0.5,
                    backgroundColor: 'green',
                })
            ),
            transition('* => *', [
                animate(
                    '1s',
                    keyframes([
                        style({ opacity: 0.1, offset: 0.1 }),
                        style({ opacity: 0.6, offset: 0.2 }),
                        style({ opacity: 1, offset: 0.5 }),
                        style({ opacity: 0.2, offset: 0.7 }),
                    ])
                ),
            ]),
        ]),
    ],
})
export class OpenClosePulsationComponent {
    isOpen = true;

    toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
