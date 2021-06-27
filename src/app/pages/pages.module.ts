import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LudoLayoutModule } from '../layout/layout.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes:Routes = [
  {path: '', component: PagesComponent, children:[
    {path: '', component: LandingPageComponent},
    {path: 'login', component: LoginComponent, data:{animation: 'LoginPage'}},
    {path: 'signup', component: SignupComponent, data:{animation: 'SignupPage'}},
    {path: '**', redirectTo:''},
  ]},
  {path:'**', redirectTo:'', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PagesComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LudoLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
