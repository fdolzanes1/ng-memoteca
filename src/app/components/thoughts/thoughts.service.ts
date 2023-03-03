import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thoughts } from './thoughts.interface';

@Injectable({
  providedIn: 'root',
})
export class ThoughtsService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar(): Observable<Thoughts[]> {
    return this.http.get<Thoughts[]>(this.API);
  }

  criar(thought: Thoughts): Observable<Thoughts> {
    return this.http.post<Thoughts>(this.API, thought);
  }

  excluir(thought: Thoughts): Observable<Thoughts> {
    const url = `${this.API}/${thought.id}`;
    return this.http.delete<Thoughts>(url);
  }
}
