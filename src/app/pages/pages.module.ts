import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import{FormsModule} from '@angular/forms';


@NgModule({
  declarations: [

    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,

  ],

  exports: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,


  ],


  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
