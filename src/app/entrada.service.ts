import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Entrada } from './model/EntradaModel';

@Injectable()
export class EntradaService {
  constructor(public http: HttpClient) {}
  baseUrl = 'https://api-estacionamento.herokuapp.com/estacionamento';

  getEntrada(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(this.baseUrl);
  }

  criarEntrada(Entrada: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(`${this.baseUrl}`, Entrada);

  }
}



