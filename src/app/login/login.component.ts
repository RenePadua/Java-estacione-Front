import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Auth {
  token: string;
  username: string;
  profile: Array<String>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  site = "https://api-estacionamento.herokuapp.com";
  auth: Auth | null = null;
  login = "kalel";
  senha = "123456";

  
  list = null;

  
  constructor(private http: HttpClient) { }


  postLogin(){
    this.http.post<Auth>(
      this.site+'/login', 
      { login: this.login, senha: this.senha}
    ).subscribe(data => {
        this.auth = data;
      }
      
    
    );
  }

  postLogout(){
    this.auth = null;
  }


  
}