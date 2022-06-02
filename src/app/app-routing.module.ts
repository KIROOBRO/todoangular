import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {appRouter} from "./core/constants/routes";
import {TaskPageComponent} from "./pages/task-page/task-page.component";

const routes: Routes = [
  {
    path: appRouter['homePage'].routerPath,
    loadChildren: () => import('../app/pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: appRouter['taskPage'].routerPath,
    loadChildren: () => import('../app/pages/task-page/task-page.module').then(m => m.TaskPageModule)
  },
  {
    path: '**',
    redirectTo: appRouter['homePage'].routerPath
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
