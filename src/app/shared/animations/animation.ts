import {
    animate,
    animateChild,
    animation,
    group,
    query,
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

export const slideInAnimation = trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
        style({
            position: 'relative',
        }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ]),
        query(':enter', [
            style({
                left: '-100%',
            }),
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate(
                    '300ms ease-out',
                    style({
                        left: '100%',
                    })
                ),
            ]),
            query(':enter', [
                animate(
                    '300ms ease-out',
                    style({
                        left: '0%',
                    })
                ),
            ]),
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(
                ':leave',
                [animate('200ms ease-out', style({ left: '100%' }))],
                { optional: true }
            ),
            query(
                ':enter',
                [animate('300ms ease-out', style({ left: '0%' }))],
                { optional: true }
            ),
        ]),
        query(':enter', animateChild(), { optional: true }),
    ]),
]);
