import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../../core/services/task.service";
import {ITask} from "../../core/interfaces/i-task";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  public currentId!: string;
  public currentTask!: ITask;
  public isBlacked!: boolean

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.isBlacked = +this.activatedRoute.snapshot.queryParams['cdx'] % 2 === 0;
    this.currentId = this.activatedRoute.snapshot.params['id'];
    this.currentTask = this.taskService.getCurrentTask(this.currentId);
  }

}
