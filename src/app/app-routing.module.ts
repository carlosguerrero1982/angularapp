import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';


import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes : Routes = [

  
  

  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  
 
 
  {path: '**', component: NopagefoundComponent },

];



@NgModule({
  
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
