import {
    animate,
    animation,
    style,
    transition,
    trigger,
    useAnimation,
} from '@angular/animations';

export const transitionAnimation = animation([
    style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}',
    }),
    animate('{{ time }}'),
]);

export const triggerAnimation = trigger('openClose', [
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
]);

export const borderAnimation = trigger('textColor', [
    transition('open <=> close', [
        style({
            color: 'blue',
        }),
        animate('1s'),
    ]),
]);
