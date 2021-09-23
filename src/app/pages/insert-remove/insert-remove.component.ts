import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-insert-remove',
    templateUrl: './insert-remove.component.html',
    styleUrls: ['./insert-remove.component.scss'],
    animations: [
        trigger('insertRemoveTrigger', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(
                    '2000ms',
                    style({
                        opacity: 1,
                        backgroundColor: 'red',
                    })
                ),
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate(
                    '2000ms',
                    style({
                        opacity: 0,
                        backgroundColor: 'blue',
                    })
                ),
            ]),
        ]),
    ],
})
export class InsertRemoveComponent {
    isShown = false;

    toggle(): void {
        this.isShown = !this.isShown;
    }
}
