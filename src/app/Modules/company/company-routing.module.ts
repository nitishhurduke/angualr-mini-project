import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';

//These routes will work in app.component.html only if company.module imported in app.module.ts
const routes: Routes = [
  {
    path:"", //removed path:"company" as till this path is already set in app-routing.module  
    component:CompanyComponent,
    children:[
      {
        path:"list",
        component:CompanyListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
