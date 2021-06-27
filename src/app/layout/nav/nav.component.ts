import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  links = [
    {path: 'home', name: 'home'},
    {path: 'buy', name: 'Buy Chips'},
    {path: 'sell', name: 'Sell Chips'},
    {path: 'history', name: 'history'},
    {path: 'transactions', name: 'transactions'},
    {path: 'settings', name: 'settings'},
    {path: 'help', name: 'help'},
    {path: 'tnc', name: 'Terms and Conditions'},
  ]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

    adminArea(){
      this.router.navigateByUrl('/sidenav/livematches');
    }

    logout(){
      this.router.navigateByUrl('/login');
    }
  }
