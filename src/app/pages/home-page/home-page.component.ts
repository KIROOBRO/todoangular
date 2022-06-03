import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../core/services/task.service";
import {ITask} from "../../core/interfaces/i-task";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public tasksArray: ITask[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tasksArray = this.taskService.getData();
  }

  public openTask(id: string ,idx: number ) {
    this.router.navigate(['/task-detail', id], {
      relativeTo: this.activatedRoute,
      queryParams: {
        cdx: idx
      }
    });
  }

}
