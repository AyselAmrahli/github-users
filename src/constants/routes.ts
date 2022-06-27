import { IAppRoute } from "./models";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

export const routes:Array<IAppRoute> = [
  {
    path: '/',
    Component: Home,
  },

  {
    path: '/user/detail',
    Component: Detail,
  },
]