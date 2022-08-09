import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmptyError, from, of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, switchMap } from "rxjs/operators";

import { TodoService } from "src/app/pages/todo/service/todo.service";
import { getTodo, getTodoSuccess, addTodo, addTodoSucess } from "../actions/todo.action";

@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(
    () => this.actions$.pipe(
      ofType(getTodo),
      exhaustMap(() => this.todoSvc.getTodos().pipe(
        map((todo) => getTodoSuccess({ todo }))
      ))
    )
  );

  //switchMap((todo) => from(this.todoSvc.addTodo(todo.todo)))
  addTodo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addTodo),
        exhaustMap((data) => this.todoSvc.addTodo(data.todo).pipe(
          map((todo) => {
            return addTodoSucess({ todo });
          })
        ))
      )
    }
  );

  constructor(private actions$: Actions, private todoSvc: TodoService) { }
}
