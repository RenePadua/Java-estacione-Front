import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from './model/ClienteModel';

@Injectable()
export class ClienteService {
  constructor(public http: HttpClient) {}
  baseUrl = 'https://api-estacionamento.herokuapp.com/clientes';

  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  criarCliente(Cliente: Cliente): Observable<Cliente> {
    return this.http.post<any>(`${this.baseUrl}`, Cliente).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
