import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmploye } from './employe';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private _url:string = "/assets/data/employe.json" ;
  constructor(private http:HttpClient) { }
  getEmployee():Observable<IEmploye[]> {
    return this.http.get<IEmploye[]>(this._url);
  }

 
}
