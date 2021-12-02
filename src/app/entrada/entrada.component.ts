import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrada } from '../model/EntradaModel';
import { EntradaService } from '../entrada.service';
import { VeiculoService } from '../veiculo.service';
import { ClienteService } from '../cliente.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Cliente } from '../model/ClienteModel';
import { Veiculo } from '../model/VeiculoModel';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
  providers: [EntradaService, ClienteService, VeiculoService, FormBuilder],
})
export class EntradaComponent implements OnInit {
  entrada: Entrada;
  entradas: Entrada[] = [];
  form: FormGroup = new FormGroup({
    placa: new FormControl(),
  });

  constructor(
    public entradaService: EntradaService,
    public clienteService: ClienteService,
    public veiculoService: VeiculoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.entrada = {
      id: 0,
      carro: {
        id: 0,
        marca: '',
        modelo: '',
        cor: '',
        placa: '',
        cliente: {
          id: 0,
          nome: '',
          cpf: '',
          telefone: '',
        },
      },
      horaEntrada: '',
      horaSaida: '',
      dataEntrada: '',
      dataSaida: '',
      preco: 0,
    };
  }

  dataSource: Array<Entrada> = [];
  dataCar: Array<Veiculo> = [];
  clientes: Array<Cliente> = [];

  /*
verificarCarroestacionado() { 
if (this.horaEntrada != null && horaSaida == null) {
return true({{ i.carro.placa }});
}
else {
  return false;
}

}
*/

  listarClientes(): void {
    this.clienteService.getCliente().subscribe((data: Cliente[]) => {
      data.forEach((i) => this.clientes.push(i));
      console.log(this.clientes);
    });
  }

  listarVeiculos(): void {
    this.veiculoService.getVeiculo().subscribe((data: Veiculo[]) => {
      data.forEach((i) => this.dataCar.push(i));
      console.log(this.dataCar);
    });
  }


  listar(): void {
    this.entradaService.getEntrada().subscribe((data: Entrada[]) => {
      data.forEach((i) => this.dataSource.push(i));
      console.log(this.dataSource);
    });
  }

  criarEntrada() {
    this.entradaService
      .criarEntrada(this.form.value)
      .subscribe((_result) => {});
    console.log(this.entrada);
    window.location.reload();
  }

  onSubmit() {
    this.criarEntrada();
    console.log();
    this.ngOnInit;
  }

  ngOnInit() {
    this.listarClientes();
    this.listarVeiculos();
    this.listar();
    this.form = this.formBuilder.group({
      dataEntrada: [''],
      horaEntrada: [''],
    });
  }
}
