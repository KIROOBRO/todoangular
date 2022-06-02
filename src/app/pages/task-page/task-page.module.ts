import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page.component';
import {TodoCardModule} from "../../core/components/todo-card/todo-card.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: TaskPageComponent
  }
]

@NgModule({
  declarations: [
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    TodoCardModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskPageModule { }
