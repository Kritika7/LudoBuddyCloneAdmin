import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from "rxjs/internal/operators";
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('openClose', [
        // ...
        state('open', style({
          // opacity: 1,
          transform: 'scale(0)',
        })),
        state('closed', style({
          // opacity: 0.5,
          transform: 'scale(1)'
        })),
        transition('closed => open', [
          animate('0.5s')
        ]),
        transition('open => closed', [
          animate('0.2s')
        ]),
      ]),
      trigger('insertRemoveTrigger', [
        transition(':enter', [
          style({ opacity: 1 ,transform: 'scale(0)',}),
          animate('200ms', style({ opacity: 0,transform: 'scale(1)'})),
        ]),
        transition(':leave', [
          style({ opacity: 0 ,transform: 'scale(1)',}),
          animate('200ms', style({ opacity: 1,transform: 'scale(0)' }))
        ])
      ]),
    ]
})
export class AppComponent {
  show = true;
  isOpen = true;
  constructor(private router: Router) {
    router.events
    .subscribe((event) => {
      if(event instanceof NavigationStart){
        this.show = true;
      }
      else if(event instanceof NavigationEnd){
        this.show = false;
        this.isOpen = false;
      }
    });
  }

}
