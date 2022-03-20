import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

//These routes will work in app.component.html only if employee.module imported in app.module.ts
const routes: Routes = [
  {
    path:"",//removed path:"company" as till this path is already set in app-routing.module  
    component:EmployeeComponent,
    children:[
      {
        path:"list",
        component:EmployeeListComponent,
        children:[
          {
          path:"details/:id",
          component:EmployeeDetailsComponent
          },
          {
            path:"update",
            component:UpdateEmployeeComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
