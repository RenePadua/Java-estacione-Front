import { Component, OnInit } from '@angular/core';
import { Saida } from '../model/SaidaModel';
import { SaidaService } from '../saida.service';
import { EntradaService } from '../entrada.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Entrada } from '../model/EntradaModel';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css'],
  providers: [SaidaService, EntradaService],
})
export class SaidaComponent implements OnInit {
  saida: Saida;
  saidas: Saida[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    placa: new FormControl(),
    horaEntrada: new FormControl(),
    horaSaida: new FormControl(),
    preco: new FormControl(),
  });

  constructor(
    public saidaService: SaidaService,
    public entradaService: EntradaService,
    private formBuilder: FormBuilder
  ) {
    this.saida = {
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
  dataSource: Array<Saida> = [];
  entradas: Array<Entrada> = [];

  listarEntradas(): void {
    this.entradaService.getEntrada().subscribe((data: Entrada[]) => {
      data.forEach((i) => this.entradas.push(i));
      console.log(this.entradas);
    });
  }

  listar(): void {
    this.saidaService.getSaida().subscribe((data: Saida[]) => {
      data.forEach((i) => this.dataSource.push(i));
      console.log(this.dataSource);
    });
  }

  criarSaida() {
    this.saidaService.criarSaida(this.form.value).subscribe((_result) => {});
    console.log(this.saida);
    window.location.reload();
  }

  /*
  verificarCarroestacionado() {
    if (this.saida.horaEntrada != null && this.saida.horaSaida == null) {
      this.saida.carro.placa = display(none);
    } else {
      return false;
      return this.saida.carro.placa;
    }
  }
*/

  ngOnInit() {
    this.listarEntradas();
    this.listar();
    this.form = this.formBuilder.group({
      placa: [''],
    });
  }
}
