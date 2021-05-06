import { Component, OnInit } from '@angular/core';
//importamos el modelo usuario
import { Usuario } from '../../../models/usuario';//importamos el modelo de usuario
import { UsuarioService } from 'src/app/services/usuario.service';//importamos el usuario services
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//creamos la variable usuario
  public usuario;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario ('','','',0,'','','',false);
   }
  
  ngOnInit(): void {}

  //metodo login
  login(loginForm: any){
    //validamos si el formulario es valido
     if (!loginForm.valid) {
       console.log('faltan datos obligatorios');
     } else {
      //realizamos el login
      this.usuarioService.login(this.usuario).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log('error del response: ', error);
        }
      );
     }
  }
}

