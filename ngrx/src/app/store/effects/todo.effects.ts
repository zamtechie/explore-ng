import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmptyError } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";

import { TodoService } from "src/app/pages/todo/service/todo.service";
import { getTodo, getTodoSuccess } from "../actions/todo.action";

@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(
    () => this.actions$.pipe(
      ofType(getTodo),
      exhaustMap( () => this.todoSvc.getTodos().pipe(
        map((todo) => getTodoSuccess({todo}))
      ))
    )
  );
  constructor(private actions$: Actions, private todoSvc: TodoService) {}
}
