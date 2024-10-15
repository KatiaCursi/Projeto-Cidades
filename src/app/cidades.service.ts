import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cidade } from './cidades';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(private http:HttpClient) { }

  getCidades(): Observable<cidade[]>{
    return this.http.get<cidade[]>('http://localhost:3000/cidades');
  }

  delete(cidade:cidade): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/cidades/'+cidade.id);
  }
  getCidadesByID(id:number): Observable<cidade[]>{
    return this.http.get<cidade[]>('http://localhost:3000/cidades/'+ id);
  }

  update(cidade:cidade): Observable<cidade>{
    return this.http.put<cidade>('http://localhost:3000/cidades/'+ cidade.id,cidade);
  }

  save(cidade:cidade):Observable<cidade>{
    return this.http.post<cidade>('http://localhost:3000/cidades/', cidade);
  }

}
