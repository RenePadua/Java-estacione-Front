import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Veiculo } from './model/VeiculoModel';

@Injectable()
export class VeiculoService {
  constructor(public http: HttpClient) {}
  baseUrl = 'https://api-estacionamento.herokuapp.com/carros';

  getVeiculo(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.baseUrl);
  }


  criarVeiculo(Veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<any>(`${this.baseUrl}`, Veiculo).pipe(
      map((res: any) => {
        return res;
      })
    );
  }





  /*
  criarVeiculo(Veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<any>(`${this.baseUrl}`, Veiculo).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
*/

}
