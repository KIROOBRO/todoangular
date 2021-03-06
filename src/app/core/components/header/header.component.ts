import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {ITask} from "../../interfaces/i-task";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public todoNameControl!: FormControl;

  constructor(private taskService: TaskService) {
  }

  public ngOnInit(): void {
    this.todoNameControl = new FormControl('');
  }

  public createTask() {

    const newTask: ITask = {
      name: this.todoNameControl.value,
      description: this.taskService.generatorUniqDesc(),
      icon: this.taskService.generatorUniqIcon(),
      id: this.taskService.generatorUniqId(),
      todos: []
    };

    this.taskService.addData(newTask);
  }
}
