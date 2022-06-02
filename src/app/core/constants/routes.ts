import {IRoutes} from "../interfaces/i-routes";

export const appRouter: IRoutes = {
  homePage: { routerPath: 'homepage', fullPath: '/homepage'},
  taskPage: { routerPath: 'task-detail/:id', fullPath: '/taskpage'}
}
