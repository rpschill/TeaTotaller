import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'app', component: MainWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
