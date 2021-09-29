import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation],
})
export class AppComponent {
    @HostBinding('@.disabled')
    public animationsDisabled = false;

    toggleAnimations(): void {
        this.animationsDisabled = !this.animationsDisabled;
    }

    prepareRoute(routerOutlet: RouterOutlet): string {
        return (
            routerOutlet &&
            routerOutlet.activatedRouteData &&
            routerOutlet.activatedRouteData.animation
        );
    }
}
