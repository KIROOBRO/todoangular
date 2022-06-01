export interface IRoutes {
  [key: string]: IRoutesData
}

export interface IRoutesData {
  routerPath: string;
  fullPath?: string;
}
