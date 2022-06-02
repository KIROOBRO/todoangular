import {Component, Input, OnInit} from '@angular/core';
import {ITask} from "../../interfaces/i-task";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() cardData!: ITask;

  constructor() { }

  public ngOnInit(): void {
  }

}
