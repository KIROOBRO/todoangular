import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../core/services/task.service";
import {ITask} from "../../core/interfaces/i-task";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public tasksArray: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasksArray = this.taskService.getData();
    console.log(this.tasksArray)
  }

}
