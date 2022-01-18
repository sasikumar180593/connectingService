import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: Task[]=[];
  constructor(public serve:TaskService) { }

  ngOnInit(): void {
    this.serve.getTaskDetials().subscribe(taskData=>{
      taskData.forEach((mod: any)=>{
        this.task.push(new Task().deserialize(mod));
      }
      )
    }

    )
  }

}
