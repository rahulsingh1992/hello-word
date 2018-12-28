import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  template: `
    
      employeelist works!
      {{errorMassage}}
      <ul *ngFor ="let emp of employee">
        <li>{{emp.name}}</li>
      </ul>
    
  `,
  styles: []
})
export class EmployeelistComponent implements OnInit {
  public employee = [] ;
  public errorMassage ;
  constructor(private _employeservice : EmployeeService) { }

  ngOnInit() {
    this._employeservice.getEmployee().subscribe(data => this.employee=data ,
                                                  error =>this.errorMassage= error);
    console.log(this.employee);
  }

}
