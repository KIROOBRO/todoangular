import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {appRouter} from "./core/constants/routes";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: appRouter['homePage'].routerPath,
    loadChildren: () => import('../app/pages/home-page/home-page.module').then(m => m.HomePageModule)
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
