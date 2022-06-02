import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {TodoCardModule} from "../../core/components/todo-card/todo-card.module";
import {RouterModule, Routes} from "@angular/router";
import {HeaderModule} from "../../core/components/header/header.module";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    TodoCardModule,
    RouterModule.forChild(routes),
    HeaderModule
  ]
})
export class HomePageModule {
}
