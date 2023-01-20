import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResFakeJsonData } from './interfaces/fakeJsonGetData';

@Injectable({
  providedIn: 'root'
})
export class ApiFakeJsonService {

  constructor(private http: HttpClient) { }

  getDataFromFakeJsonParam(todos: number): Observable<ResFakeJsonData> {
    return this.http.get<ResFakeJsonData>(
      `https://jsonplaceholder.typicode.com/todos/${todos}`,
    );
  }

}
