import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service :CommonService) { }

  empdata:Employee[];

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe(data=>{
      this.empdata = data
    })

    
  }
  deleteData(id:number){
      this.service.deleteData(id).subscribe();
      window.location.reload();
  }
}
