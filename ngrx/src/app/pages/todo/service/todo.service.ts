import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointService } from 'src/app/service/endpoint.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private epService: EndpointService) { }

  getTodos(): Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    return this.epService.get(url);
  }

  addTodo(todo: any): Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let payload = todo;
    return this.epService.post(url, payload);
  }
}
