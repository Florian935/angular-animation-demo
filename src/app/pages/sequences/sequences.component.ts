import {
    animate,
    group,
    query,
    sequence,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-sequences',
    templateUrl: './sequences.component.html',
    styleUrls: ['./sequences.component.scss'],
    animations: [
        trigger('openClose', [
            state(
                'open',
                style({
                    height: '300px',
                    width: 200,
                })
            ),
            state(
                'close',
                style({
                    width: 200,
                })
            ),
            transition(
                'open <=> close',
                query(
                    'div',
                    sequence([
                        animate(
                            '1s 0.5s ease',
                            style({
                                backgroundColor: 'yellow',
                                height: 100,
                                transform: 'translateX(50%)',
                            })
                        ),
                        animate(
                            '1s 0.5s ease',
                            style({
                                backgroundColor: 'green',
                                height: 200,
                                transform: 'translateX(-100%)',
                            })
                        ),
                        animate(
                            '1s 2s ease',
                            style({
                                backgroundColor: 'purple',
                                height: 300,
                                transform: 'translateX(0)',
                            })
                        ),
                    ])
                )
            ),
        ]),
    ],
})
export class SequencesComponent {
    isOpen = false;

    toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
