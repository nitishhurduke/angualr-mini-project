import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  
  
  
  constructor(private http:HttpClient) { }
  
  adminURL:string = "http://localhost:3000/Admins"
  empURL:string = "http://localhost:3000/Employees"
  
  addAdmin(admin: Admin):Observable<Admin> {
    return this.http.post<Admin>(this.adminURL,admin);
  }
  addEmployee(emp: Employee):Observable<Employee> {
  
    return this.http.post<Employee>(this.empURL,emp);
  }
  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empURL);
  }
  deleteData(id: number):Observable<Employee> {
    return this.http.delete<Employee>(this.empURL+"/"+id);
  }
  getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.empURL+"/"+id);
  }
  updateEmp(emp: Employee):Observable<Employee> {
  return this.http.put<Employee>(this.empURL+"/"+emp.id,emp);
  }
  
}
