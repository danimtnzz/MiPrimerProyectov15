import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimerProyectov15';
  username:string = 'Dani';

  rutas: string[]=['piedra-papel-tijera', 'lista-personajes', 'semaforo', 'prueba-material'];

  constructor(private router: Router){

  }

  cambiarRuta(){
    let numAleatorio = Math.floor(Math.random()*this.rutas.length);
    this.router.navigate([this.rutas[numAleatorio]], )
    this.router.navigate(['/semaforo']);
  }
}
