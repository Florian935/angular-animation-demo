import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { transitionAnimation } from 'src/app/shared/animations/animation';

@Component({
    selector: 'app-reusable-animation',
    templateUrl: './reusable-animation.component.html',
    styleUrls: ['./reusable-animation.component.scss'],
    animations: [
        trigger('openClose', [
            transition('open <=> close', [
                useAnimation(transitionAnimation, {
                    params: {
                        height: 0,
                        opacity: 1,
                        backgroundColor: 'red',
                        time: '1s',
                    },
                }),
            ]),
        ]),
    ],
})
export class ReusableAnimationComponent {
    isOpen = false;

    toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
