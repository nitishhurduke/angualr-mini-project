import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"

  },
  {
    path:"about",
    component:AboutUsComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    children:[
      { 
        path:"company",
        loadChildren:() => import('src/app/Modules/company/company.module').then(module => module.CompanyModule)
      },
      {
        path:"employee",
        loadChildren:() => import('src/app/Modules/employee/employee.module').then(module=>module.EmployeeModule)
      }
    ]
  },
  //Needed to Add Paths of Company and Employee Modules because NOT imported in app.module.ts and to implement Lazy load 
  //after adding these paths update  paths in respective module-router.ts 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
