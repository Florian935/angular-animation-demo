import { Component } from '@angular/core';
import {
    borderAnimation,
    triggerAnimation,
} from 'src/app/shared/animations/animation';

@Component({
    selector: 'app-reusable-trigger',
    templateUrl: './reusable-trigger.component.html',
    styleUrls: ['./reusable-trigger.component.scss'],
    animations: [triggerAnimation, borderAnimation],
})
export class ReusableTriggerComponent {
    isOpen = false;

    toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
