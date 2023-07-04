import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'T12AngularBasics';
  valor: string = '0';
  segundoValor: string = '0';
  resultado: number = 0;
  isComa: boolean = false;
  isSimbolo: boolean = false;
  isDiv: boolean = false;
  isMult: boolean = false;
  isResta: boolean = false;
  isSuma: boolean = false;
  operacion: number[] = [];

  onSiete() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '7';
      } else {
        this.segundoValor = this.segundoValor + 7;
      }
    }
    if (this.valor == '0') {
      this.valor = '7';
    } else {
      this.valor = this.valor + 7;
    }
  }
  onOcho() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '8';
      } else {
        this.segundoValor = this.segundoValor + 8;
      }
    }
    if (this.valor == '0') {
      this.valor = '8';
    } else {
      this.valor = this.valor + 8;
    }
  }
  onNueve() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '9';
      } else {
        this.segundoValor = this.segundoValor + 9;
      }
    }
    if (this.valor == '0') {
      this.valor = '9';
    } else {
      this.valor = this.valor + 9;
    }
  }
  onCuatro() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '4';
      } else {
        this.segundoValor = this.segundoValor + 4;
      }
    }
    if (this.valor == '0') {
      this.valor = '4';
    } else {
      this.valor = this.valor + 4;
    }
  }
  onCinco() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '5';
      } else {
        this.segundoValor = this.segundoValor + 5;
      }
    }
    if (this.valor == '0') {
      this.valor = '5';
    } else {
      this.valor = this.valor + 5;
    }
  }
  onSeis() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '6';
      } else {
        this.segundoValor = this.segundoValor + 6;
      }
    }
    if (this.valor == '0') {
      this.valor = '6';
    } else {
      this.valor = this.valor + 6;
    }
  }
  onUno() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '1';
      } else {
        this.segundoValor = this.segundoValor + 1;
      }
    }
    if (this.valor == '0') {
      this.valor = '1';
    } else {
      this.valor = this.valor + 1;
    }
  }
  onDos() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '2';
      } else {
        this.segundoValor = this.segundoValor + 2;
      }
    }
    if (this.valor == '0') {
      this.valor = '2';
    } else {
      this.valor = this.valor + 2;
    }
  }
  onTres() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '3';
      } else {
        this.segundoValor = this.segundoValor + 3;
      }
    }
    if (this.valor == '0') {
      this.valor = '3';
    } else {
      this.valor = this.valor + 3;
    }
  }
  onComa() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = this.segundoValor + '.';
        this.isComa = true;
      }
    }
    if (this.isComa == false) {
      this.valor = this.valor + '.';
      this.isComa = true;
    }
  }
  onCero() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '0';
      } else {
        this.valor = this.valor + '0';
        this.segundoValor = this.segundoValor + '0';
      }
    } else {
      if (this.isComa) {
        this.valor = this.valor + '0';
      } else {
        if (this.valor != '0') {
          this.valor = this.valor + '0';
        }
      }
    }
  }
  onDblCero() {
    this.resultado = 0;
    if (this.isSimbolo == true) {
      if (this.segundoValor == '0') {
        this.segundoValor = '0';
      } else {
        this.segundoValor = this.segundoValor + '00';
      }
    }
    if (this.isComa == true) {
      this.valor = this.valor + '00';
    } else {
      if (this.valor != '0') {
        this.valor = this.valor + '00';
      }
    }
  }
  onBorrar() {
    this.valor = '0';
    this.segundoValor = '0';
    this.resultado = 0;
    this.isComa = false;
    this.isSimbolo = false;
  }
  onDiv() {
    if (this.isSimbolo == false) {
      this.operacion.push(Number(this.valor));
      this.valor = this.valor + '/';
      this.isDiv = true;
      this.isSimbolo = true;
      this.isComa = false;
    }
  }
  onMult() {
    if (this.isSimbolo == false) {
      this.operacion.push(Number(this.valor));
      this.valor = this.valor + '*';
      this.isMult = true;
      this.isSimbolo = true;
      this.isComa = false;
    }
  }
  onResta() {
    if (this.isSimbolo == false) {
      this.operacion.push(Number(this.valor));
      this.valor = this.valor + '-';
      this.isResta = true;
      this.isSimbolo = true;
      this.isComa = false;
    }
  }
  onSuma() {
    if (this.isSimbolo == false) {
      this.operacion.push(Number(this.valor));  
      this.valor = this.valor + '+';
      this.isSuma = true;
      this.isSimbolo = true;
      this.isComa = false;
    }
  }
  onIgual() {
    this.operacion.push(Number(this.segundoValor));
    if (this.isDiv) {
      //div
      this.resultado = (this.operacion[0]) / (this.operacion[1]);
    }
    if (this.isMult) {
      //mult
      this.resultado = (this.operacion[0]) * (this.operacion[1]);
    }
    if (this.isResta) {
      //resta
      this.resultado = (this.operacion[0]) - (this.operacion[1]);
    }
    if (this.isSuma) {
      //suma
      this.resultado = (this.operacion[0]) + (this.operacion[1]);
    }

    this.isComa = false;
    this.isSimbolo = false;
    this.isDiv = false;
    this.isMult = false;
    this.isResta = false;
    this.isSuma = false;
    this.operacion = [];
    this.valor = '0';
    this.segundoValor= '0';
  }
}
