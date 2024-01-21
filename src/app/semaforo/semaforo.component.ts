import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent {

  valor:number = 0; //int valor = 9;

  async sumar(){
    this.valor=0;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
    await new Promise(f => setTimeout(f, 1000));
    this.valor++;
  }

}
