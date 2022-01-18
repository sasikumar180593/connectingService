import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }

  getEmpDetails() {
   return this.http.get<any>('https://reqres.in/api/users?page=1');

  }

}
