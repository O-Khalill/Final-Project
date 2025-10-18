import { lazy } from "react";

export const Home = lazy(()=> import ("./Home"));
export const Dashboard = lazy(() => import("./Dashboard"));
export const About = lazy(()=>import("./About"))