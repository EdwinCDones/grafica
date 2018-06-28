import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lado: number;
  base: number;
  altura: number;
  radio: number;
  respuesta: number;
  pi: 3.14;

  cuadrado() {
    this.respuesta = this.lado * this.lado;
  }

  rectangulo() {
    this.respuesta = this.base * this.altura;
  }
  triangulo() {
    this.respuesta = this.base * this.altura / 2;
  }
  circulo() {
    this.respuesta = this.pi * this.radio;
  }


}

