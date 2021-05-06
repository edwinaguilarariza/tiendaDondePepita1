import { Injectable } from '@angular/core';
// importamos  modulos necesarios
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';// esto son las cabeceras del postman HttpHeaders
import { global } from './GLOBAL';//importamos la url del backend de GLOBAL.ts
import { Usuario } from '../models/usuario';//importamos el modelo de usuario

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //variable para la url
  public url;// public url: any; hay que de poner any mientras se le asigna un valor
  public usuario;

  //constructor de la clase
  constructor(private http: HttpClient) {
    //le asignamos la url del backend a la variable global
    this.url = global.url;
    //iniciar el modelo de usuario
    this.usuario = new Usuario('','','',0,'','','',false);//estos son los espacios en los que se debe  llenar el modelo usuario
   }
   //metodo para hacer el login aqui va toda la logica 
   login(usuario : Usuario, getToken = true): Observable<any>{
    //variable para almacenar los datos del usuario
    let json = usuario;
    //si llega el token
    if (!getToken) {
      
    } else {
      usuario.getToken = true;
    }
    //headers del request
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //enviamos y retornamos la peticion
    //http://localhost:3001/api/login
    return this.http.post(this.url + 'login', json, {headers:headers});

   }

   //metodo para obtener el token
   getToken(){}

   //metodo para los datos del usuario
   getIdentity(){}


}


