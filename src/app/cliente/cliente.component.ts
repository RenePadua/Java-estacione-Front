import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/ClienteModel';
import { ClienteService } from '../cliente.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  cliente: Cliente;
  clientes: Cliente[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    cpf: new FormControl(),
    telefone: new FormControl(),
  });

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.cliente = {
          id: 0,
          nome: '',
          cpf: '',
          telefone: ''
 }
  }
  dataSource: Array<Cliente> = [];

  listar(): void {
    this.clienteService.getCliente().subscribe((data: Cliente[]) => {
      data.forEach((i) => this.dataSource.push(i));
      console.log(this.dataSource);
    });
  }

  criarCliente() {
    this.clienteService.criarCliente(this.form.value).subscribe((result) => {});
    console.log(this.cliente);
    window.location.reload();
  }

  onSubmit() {
    this.criarCliente();
    console.log();
  }

  ngOnInit() {
    this.listar();
    this.form = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      telefone: [''],
    });
  }
}
