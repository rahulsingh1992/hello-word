import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
      employee-detail
      {{employees |json
      
      }}
      {{errorMassage}}
      <ul *ngFor ="let emp of employees">
        <li>{{emp.id}} {{emp.name}} {{emp.add}}</li>
      </ul>
    `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [] ; 
   public errorMassage ; 
 
  constructor(private _employeservice:EmployeeService) { }

  ngOnInit() {
    this._employeservice.getEmployee().subscribe(data => this.employees=data ,
                                                  error =>this.errorMassage= error);
    console.log(this.employees);
  }

}
