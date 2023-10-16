import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display: string;
  operador: string;
  primerNumero: number;

  constructor() {
    this.display='';
    this.operador='';
    this.primerNumero=0;
  }
  agregarNumero(numero: number) {
    this.display += numero.toString();
  }

  realizarOperacion(operador: string) {
    if (this.display !== '') {
      this.operador = operador;
      this.primerNumero = parseFloat(this.display);
      this.display = '';
    }
  }

  borrar() {
    this.display = '';
    this.operador = '';
    this.primerNumero = 0;
  }
  calcularResultado() {
    if (this.operador && this.primerNumero !== null && this.display !== '') {
      const segundoNumero = parseFloat(this.display);
      switch (this.operador) {
        case '+':
          this.display = (this.primerNumero + segundoNumero).toString();
          break;
        case '-':
          this.display = (this.primerNumero - segundoNumero).toString();
          break;
        case '*':
          this.display = (this.primerNumero * segundoNumero).toString();
          break;
        case '/':
          if (segundoNumero !== 0) {
            this.display = (this.primerNumero / segundoNumero).toString();
          } else {
            this.display = 'Error';
          }
          break;
      }
      this.operador = '';
      this.primerNumero = 0;
    }
  }
}
