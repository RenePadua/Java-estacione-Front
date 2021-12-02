import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SaidaComponent } from './saida/saida.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HistoricoComponent } from './historico/historico.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { VeiculoComponent } from './veiculo/veiculo.component';

import { VeiculoService } from './veiculo.service';
import { ClienteService } from './cliente.service';
import { SaidaService } from './saida.service';
import { EntradaService } from './entrada.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'entrada', component: EntradaComponent },
      { path: 'saida', component: SaidaComponent },
      { path: 'cliente', component: ClienteComponent },
      { path: 'veiculo', component: VeiculoComponent },
      { path: 'historico', component: HistoricoComponent },  
      { path: 'integrantes', component: IntegrantesComponent },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    LoginComponent,
    EntradaComponent,
    SaidaComponent,
    ClienteComponent,
    VeiculoComponent,
    HistoricoComponent,
    IntegrantesComponent,
  ],
  bootstrap: [AppComponent],
  providers: [VeiculoService, ClienteService, SaidaService, EntradaService],
})
export class AppModule {}
