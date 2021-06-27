import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
const routes:Routes = [{path: '', component:HelpComponent},
{path:'**', redirectTo:''}]

@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class HelpModule { }
