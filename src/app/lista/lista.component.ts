import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaDePersonajes:Personaje[] = [];
  // personaje1:Personaje = new Personaje('Pepe','/assets/images/6.png','Es el favorito del pueblo',80);
  imagen6:string='/assets/images/6.png';
  imagen7:string='/assets/images/7.png';
  imagen8:string='/assets/images/8.png';
  imagen9:string='/assets/images/9.png';
  imagen10:string='/assets/images/10.png';

  ngOnInit(): void {
    // this.listaDeNombres = ['Pedro', 'Jaime', 'Natalia', 'Rosa', 'Mar', 'Lolito'];
    this.listaDePersonajes=[
      new Personaje('Pepe','/assets/images/6.png','Es el favorito del pueblo',80),
      new Personaje('Bruja',this.imagen7,'Es una bruja',20),
      new Personaje('Pepe',this.imagen8,'Es el favorito del pueblo',12),
      new Personaje('Pepe',this.imagen9,'Es el favorito del pueblo',40),
      new Personaje('Pepe','/assets/images/6.png','Es el favorito del pueblo',38),
      new Personaje('Pepe','/assets/images/6.png','Es el favorito del pueblo',69),

    ];
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
