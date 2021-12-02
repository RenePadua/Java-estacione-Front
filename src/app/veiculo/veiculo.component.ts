import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../model/VeiculoModel';
import { Cliente } from '../model/ClienteModel';
import { VeiculoService } from '../veiculo.service';
import { ClienteService } from '../cliente.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';


@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css'],
  providers: [VeiculoService, ClienteService, FormBuilder],
})
export class VeiculoComponent implements OnInit {
  veiculo: Veiculo;
  veiculos: Veiculo[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),
    cor: new FormControl(),
    placa: new FormControl(),
    cliente: new FormControl(),
  });

  constructor(
    public veiculoService: VeiculoService,
    public clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) 
  {
    this.veiculo = {
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
    };
}

  dataSource: Array<Veiculo> = [];
  clientes: Array<Cliente> = [];

  /*
  verificarCliente() {
    var r = confirm('Cliente já está cadastrado?');
    if (r == true) {
      return true;
    } else {
      this.router.navigate(['/cliente']);
      console.log('sayHello');
      window.location.reload();
    }
  }
*/

  listarClientes(): void {
    this.clienteService.getCliente().subscribe((data: Cliente[]) => {
      data.forEach((i) => this.clientes.push(i));
      console.log(this.clientes);
    });
  }

  listar(): void {
    this.veiculoService.getVeiculo().subscribe((data: Veiculo[]) => {
      data.forEach((i) => this.dataSource.push(i));
      console.log(this.dataSource);
    });
  }

  criarVeiculo() {
    this.veiculoService
      .criarVeiculo(this.form.value)
      .subscribe((_result) => {});
    console.log(this.veiculo);
    window.location.reload();
  }

  onSubmit() {
    this.criarVeiculo();
    console.log();
    this.ngOnInit;
  }

  ngOnInit() {
    this.listarClientes();
    this.listar();
    this.form = this.formBuilder.group({
      carro: [''],
      placa: [''],
      marca: [''],
      modelo: [''],
      cor: [''],
      cliente: [''],
    });
  }
}
