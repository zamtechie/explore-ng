import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, getTodo } from 'src/app/store/actions/todo.action';
import { TodoState } from 'src/app/store/reducers/todo.reducers';
import { Todo } from './model/Todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  todos$ = this.store.select('todos')
  constructor(private todoSvs: TodoService, private store: Store<TodoState>) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.store.dispatch(getTodo());
    /*this.todoSvs.getTodos().subscribe((todos: Todo[]) => {
      console.log("response:", todos);
      this.todos = todos;
    })*/
  }
  createTodoClicked(): void {
    let newTodo: Todo = {
      id: 10,
      title: 'Test Title',
      completed: false,
      userId: 10
    }
    this.store.dispatch(addTodo({todo: newTodo}));
    console.log('In createTodoClicked');
  }

  editClicked(id: number) {
    console.log('In edit clicked')
  }

  deleteClicked(id: number) {
    console.log('In delete clicked')
  }
}
