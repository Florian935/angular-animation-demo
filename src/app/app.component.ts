import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    @HostBinding('@.disabled')
    public animationsDisabled = false;

    toggleAnimations(): void {
        this.animationsDisabled = !this.animationsDisabled;
    }
}
