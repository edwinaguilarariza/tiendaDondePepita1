import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos modulo de http
import { HttpClientModule } from '@angular/common/http';// (primer paso)este es la primera importacion del modulo diempre se inicia asi
//importamos modulos forms
import { FormsModule } from '@angular/forms';//(segundo paso) importar modulo de formulario para loguearse

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/home/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [//(tercer paso ) importamos  HttpClientModule y FormsModule
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
