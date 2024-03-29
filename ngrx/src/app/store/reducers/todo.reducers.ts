import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/pages/todo/model/Todo";
import { getTodo, addTodo, getTodoSuccess, addTodoSucess } from "../actions/todo.action";

export interface TodoState {
  todos: ReadonlyArray<Todo>;
}

const initialState: ReadonlyArray<Todo> = [];

export const todoReducer = createReducer(
  initialState,
  //on(getTodo, (state) => [...state]),
  //on(getTodo, (state) => [...mockTodos()]),
  on(getTodoSuccess, (state, {todo}) => {
    return [...todo]
  }),
  //on(addTodo, (state, {todo}) => [...state, todo])
  on(addTodoSucess, (state, {'todo': todo}) => {
    return [
      ...state,
      todo
    ]
  })
)


function mockTodos(): Todo[] {
  return [
     {
       'completed': false,
       'id': 1,
       'title': "delectus aut autem",
       'userId': 1
     }
  ]

}
