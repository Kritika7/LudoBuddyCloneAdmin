import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TncComponent } from './tnc.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

const routes:Routes = [
  {path:'', component:TncComponent},
  {path: '**', redirectTo:''}
]


@NgModule({
  declarations: [
    TncComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatListModule
  ]
})
export class TncModule { }
