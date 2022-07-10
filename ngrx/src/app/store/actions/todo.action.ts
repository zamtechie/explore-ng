import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/pages/todo/model/Todo";

export const getTodo = createAction('[Todo] Get Todo');
export const getTodoSuccess = createAction(
  '[Todo] Get Todo Sucess',
  props<{ todo: ReadonlyArray<Todo> }>()
);
export const addTodo = createAction(
  '[Todo] Add Todo',
  //(todo: Todo) => todo
  props<{ todo: Todo }>()
);
export const addTodoSucess = createAction(
  '[Todo] Add Todo Success',
  props<{ todo: Todo }>()
);
