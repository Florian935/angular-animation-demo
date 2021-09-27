import {
    animate,
    AnimationEvent,
    keyframes,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-open-close',
    templateUrl: './open-close.component.html',
    styleUrls: ['./open-close.component.scss'],
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
                'closed',
                style({
                    height: '100px',
                    opacity: 0.8,
                    backgroundColor: '#c6ecff',
                })
            ),
            transition('open => closed', [
                animate(
                    '1s',
                    keyframes([
                        style({
                            backgroundColor: 'red',
                            height: '175px',
                            offset: 0.33,
                        }),
                        style({
                            backgroundColor: 'purple',
                            height: '150px',
                            offset: 0.66,
                        }),
                        style({
                            backgroundColor: 'green',
                            height: '125px',
                            offset: 1,
                        }),
                    ])
                ),
            ]),
            transition('closed => open', [
                animate(
                    '0.5s',
                    keyframes([
                        // when offset is occurred, evenly distributed
                        style({
                            backgroundColor: 'yellow',
                            height: '125px',
                        }),
                        style({
                            backgroundColor: 'black',
                            height: '150px',
                        }),
                        style({ backgroundColor: 'white', height: '175px' }),
                    ])
                ),
            ]),
            transition('* => closed', [animate('1s')]),
            transition('* => open', [animate('0.5s')]),
            transition('open <=> closed', [animate('0.5s')]),
            transition('* => open', [animate('1s', style({ opacity: '*' }))]),
            transition('* => *', [animate('1s')]),
        ]),
    ],
})
export class OpenCloseComponent {
    isOpen = true;
    logging = false;
    isInProgress = false;

    toggle(): void {
        this.isOpen = !this.isOpen;
    }

    toggleLogging(): void {
        this.logging = !this.logging;
    }

    onAnimationEvent(event: AnimationEvent): void {
        this.isInProgress = !this.isInProgress;

        if (!this.logging) {
            return;
        }

        // openClose is trigger name in this example
        console.warn(`Animation Trigger: ${event.triggerName}`);

        // phaseName is 'start' or 'done'
        console.warn(`Phase: ${event.phaseName}`);

        // in our example, totalTime is 1000 or 1 second
        console.warn(`Total time: ${event.totalTime}`);

        // in our example, fromState is either open or closed
        console.warn(`From: ${event.fromState}`);

        // in our example, toState is either open or closed
        console.warn(`To: ${event.toState}`);

        // the HTML element itself, the button in this case
        console.warn(`Element: ${event.element}`);
    }
}
