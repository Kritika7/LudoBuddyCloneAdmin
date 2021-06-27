import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'me', loadChildren: ()=>import('./main/main.module').then(m=>m.MainModule)},
  {path:'sidenav', loadChildren: ()=>import('./sidenavcomponents/sidenav.module').then(m=>m.SideNavModule)},
  {path:'', loadChildren: ()=>import('./pages/pages.module').then(m=>m.PagesModule), data: {animation: 'HomePage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
