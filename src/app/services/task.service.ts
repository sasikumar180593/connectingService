import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  endPoint: string='https://jsonplaceholder.typicode.com/todos';
  constructor(public http: HttpClient) { 
  }

  getTaskDetials(){
    return this.http.get<any>(this.endPoint);
  }

}
