import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.scss']
})
export class AdminnavComponent implements OnInit {

  links = [
    {path: 'userarea', name: 'User Area'},
    {path: 'livematches', name: 'Live Matches'},
    {path: 'matchrelease', name: 'Match Release'},
    {path: 'matchcancellation', name: 'Match Cancellation'},
    {path: 'addmoney', name: 'Add Money Request'},
    {path: 'withdrawals', name:'Withdrawals'},
    {path: 'paytmmgt', name: 'Paytm Mgt.'},
    {path: 'transactions', name: 'Transactions'},
    {path: 'allmatches', name: 'All Matches'},
    {path: 'audit', name: 'Audit'},
    {path: 'topplayers', name: 'Top 10 Players'},
    {path: 'manageusers', name: 'Manage Users'},

  ]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}


  ngOnInit(): void {
  }

  playground(){
    this.router.navigateByUrl('/me/home');
  }

}
