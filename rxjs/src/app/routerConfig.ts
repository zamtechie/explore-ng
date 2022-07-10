import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { CreatepostComponent } from "./pages/posts/createpost/createpost.component";

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
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/create',
    component: CreatepostComponent
  }
]

export default appRoutes;
