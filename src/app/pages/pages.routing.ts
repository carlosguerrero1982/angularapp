import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
    
    {path: 'dashboard', 
     component: PagesComponent,
    children: [
  
         {path: '', component: DashboardComponent },
         {path: 'progress', component: ProgressComponent },
         {path: 'grafica1', component: Grafica1Component },
         {path: 'accounts-settings', component: AccountSettingsComponent },
        // {path: '', redirectTo: '/dashboard', pathMatch: 'full' },

]
},
  

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
