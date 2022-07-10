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
}
