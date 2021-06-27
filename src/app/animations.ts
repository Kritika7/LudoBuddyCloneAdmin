import { trigger, transition, style, query, animateChild, animate, group } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LoginPage => SignupPage', [
      style({ position: 'relative', overflow:'hidden' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          // top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('SignupPage => LoginPage', [
      style({ position: 'relative', overflow:'hidden' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          // top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

  export const fadeAnimation = trigger('fadeAnimation', [

    /**
     *
     *  from page home to page about: ‘home => about’, or from page about to page home: ‘about => home’.
  
     */
    transition('* => *', [
      /**
               * group: which is used for grab to grab anything that’s entering or leaving the DOM.
       */
      group([
        /**
         * enter into the state
         */
        query(
          ':enter',
          [
            style({
              opacity: 0,
              transform: 'translateY(9rem) rotate(-10deg)'
            }),
            animate(
              '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
              style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
            ),
            /**
             * This will trigger any inner animations after the main animation is complete.
             */
            animateChild()
          ],
          { optional: true }
        ),
        query(':leave', [animate('0.35s', style({ opacity: 1 })), animateChild()], { optional: true })
      ])
    ])
  ])
  