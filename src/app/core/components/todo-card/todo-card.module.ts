import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputModule} from "../input/input.module";



@NgModule({
  declarations: [
    TodoCardComponent
  ],
  exports: [
    TodoCardComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatCheckboxModule,
        FormsModule,
        InputModule,
      ReactiveFormsModule
    ]
})
export class TodoCardModule { }
