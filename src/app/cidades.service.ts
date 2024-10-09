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

}
