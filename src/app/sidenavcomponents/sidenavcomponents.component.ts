import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidenavcomponents',
  templateUrl: './sidenavcomponents.component.html',
  styleUrls: ['./sidenavcomponents.component.scss']
})
export class SidenavcomponentsComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

}
