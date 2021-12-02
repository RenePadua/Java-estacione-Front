import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Saida } from './model/SaidaModel';

@Injectable()
export class SaidaService {
  constructor(public http: HttpClient) {}
  baseUrl = 'https://api-estacionamento.herokuapp.com/estacionamento';

  getSaida(): Observable<Saida[]> {
    return this.http.get<Saida[]>(this.baseUrl);
  }
  
  criarSaida(Saida: Saida): Observable<Saida> {
    return this.http.post<Saida>(`${this.baseUrl}`, Saida);

  }

}
