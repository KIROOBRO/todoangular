import {Component, Input, OnInit} from '@angular/core';
import {ITask, ITodo} from "../../interfaces/i-task";
import {FormControl} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  public todoNameControl!: FormControl;

  @Input() cardData!: ITask;
  @Input() showInput = true;
  @Input() isBlack = false;

  constructor(
    private taskService: TaskService
  ) {
  }

  public ngOnInit(): void {
    this.todoNameControl = new FormControl('');
  }

  public createTodo() {
    const newTodo: ITodo = {
      checked: false,
      label: this.todoNameControl.value
    }
    this.taskService.addTodo(this.cardData, newTodo);
  }
}
