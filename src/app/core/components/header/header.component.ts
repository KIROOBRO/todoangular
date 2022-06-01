import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public todoNameControl!: FormControl;

  constructor(private taskService: TaskService) { }

  public ngOnInit(): void {
    this.todoNameControl = new FormControl('');
  }

  public createTask() {
    console.log(this.todoNameControl.value);

  }
}
