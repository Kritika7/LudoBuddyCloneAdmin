import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { fadeAnimation, slideInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss'],
  animations:[
    slideInAnimation,
    fadeAnimation]
})
export class PagesLayoutComponent implements OnInit {
  animate = true;
  constructor(public route:Router) { 
    this.route.events.subscribe(u=>{
      if (u instanceof NavigationEnd){
        console.log(this.route.url.split('/'))
        const splited = this.route.url.split('/')
        this.animate = splited[splited.length-1] == ''
      }
    })
  }
  
  ngOnInit(): void {
    
  }

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet.activatedRouteData.animation)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  
}
