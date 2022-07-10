import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { TodoComponent } from "./pages/todo/todo.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodoComponent
  }
]

export default appRoutes;
