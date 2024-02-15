import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent {


  saludoParaTrunio:string = 'Hola que tal trunio';
  datosDelHijo:string='';

  listaDePersonajes: Personaje[]=[
    new Personaje('Pepe','/assets/images/6.png','Es el favorito del pueblo',80),
    new Personaje('Bruja','/assets/images/7.png','Es una bruja',20),
    new Personaje('Juan','/assets/images/8.png','Es el favorito del pueblo',12),
    new Personaje('Emma','/assets/images/9.png','Es el favorito del pueblo',40),
  ];

  recibirDatos(datos:string){
    this.datosDelHijo=datos;
  }
}

class Personaje{
  nombre:string;
  imagen:string;
  descripcion:string;
  edad:number;
  constructor(n: string,i: string,d: string,e: number){
    this.nombre = n;
    this.imagen = i;
    this.descripcion = d;
    this.edad = e;
  }
}
