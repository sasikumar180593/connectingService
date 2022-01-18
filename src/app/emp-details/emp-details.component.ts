import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employe';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {

  empdetails: Employee[] = [];
  constructor(public empObj: EmployeeService) { }

  ngOnInit(): void {
    this.empObj.getEmpDetails().subscribe(res => {
      res.data.forEach((emp: any) => {
        this.empdetails.push(new Employee().deserialize(emp))
      })
    });

  }

}
