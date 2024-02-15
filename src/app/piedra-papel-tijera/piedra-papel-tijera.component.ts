import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css'],
})
export class PiedraPapelTijeraComponent implements OnInit {
  texto: string = '';
  texto2: string = '';
  texto3: string = '';
  nombre:string = '';
  eleccionMaquina: string = '';
  vidasJugador: number = 5;
  vidasMaquina: number = 5;
  juegoFinalizado: boolean = false;

  elecciones: string[] = ['piedra', 'papel', 'tijeras'];

  constructor(private route:ActivatedRoute){

  }

  vidasJugadorArray: number[] = [];
  vidasMaquinaArray: number[] = [];

  ngOnInit(): void {
    this.texto =
      'Hola, bienvenido '+ this.nombre + ' a Piedra, papel o tijera! Realiza tu elección';
    this.actualizarVidasArrays();
    this.route.params.subscribe(
      params => {
        this.nombre = params['nick'];
        this.texto =
        'Hola, bienvenido '+ this.nombre + ' a Piedra, papel o tijera! Realiza tu elección';
      }
    )
  }

  elegir(eleccion: string) {
    if (this.juegoFinalizado) {
      return;
    }

    this.texto = 'Elegiste: ' + eleccion;

    var eleccionMaquina = Math.floor(Math.random() * 3);
    this.elecciones[eleccionMaquina];

    this.texto2 = 'La máquina ha elegido: ' + this.elecciones[eleccionMaquina];
    this.eleccionMaquina = this.elecciones[eleccionMaquina];
    if (this.vidasJugador && this.vidasMaquina != 0) {
      if (
        (eleccion == 'tijeras' && this.elecciones[eleccionMaquina] == 'papel') ||
        (eleccion == 'papel' && this.elecciones[eleccionMaquina] == 'piedra') ||
        (eleccion == 'piedra' && this.elecciones[eleccionMaquina] == 'tijeras')
      ) {
        this.texto3 = 'Ganaste la ronda!';
        this.vidasMaquina--;
      } else if (
        (eleccion == 'tijeras' && this.elecciones[eleccionMaquina] == 'piedra') ||
        (eleccion == 'papel' && this.elecciones[eleccionMaquina] == 'tijeras') ||
        (eleccion == 'piedra' && this.elecciones[eleccionMaquina] == 'papel')
      ) {
        this.texto3 = 'Perdiste la ronda!';
        this.vidasJugador--;
      } else {
        this.texto3 = 'Empate en la ronda.';
      }

      if (this.vidasJugador == 0 || this.vidasMaquina == 0) {
        this.juegoFinalizado = true;
      }

      this.actualizarVidasArrays();
    }
  }

  reiniciarJuego() {
    this.vidasJugador = 5;
    this.vidasMaquina = 5;
    this.texto = 'Hola, bienvenido a Piedra, papel o tijera! Realiza tu elección';
    this.texto2 = '';
    this.texto3 = '';
    this.juegoFinalizado = false;
    this.actualizarVidasArrays();
  }

  actualizarVidasArrays() {
    this.vidasJugadorArray = Array(this.vidasJugador).fill(0);
    this.vidasMaquinaArray = Array(this.vidasMaquina).fill(0);
  }
}


  // opciones = ['piedra', 'papel', 'tijeras'];
  // jugadaMaquina: string = '';
  // resultadoJuego: string = '';

  // obtenerJugadaMaquina(): void {
  //   const opcionRandom = Math.floor(Math.random() * this.opciones.length);
  //   this.jugadaMaquina = this.opciones[opcionRandom];
  // }

  // compararJugadas(jugadaUsuario: string): void {
  //   this.obtenerJugadaMaquina();

  //   if (jugadaUsuario === this.jugadaMaquina) {
  //     this.resultadoJuego = 'Empate';
  //   } else if (
  //     (jugadaUsuario === 'piedra' && this.jugadaMaquina === 'tijeras') ||
  //     (jugadaUsuario === 'papel' && this.jugadaMaquina === 'piedra') ||
  //     (jugadaUsuario === 'tijeras' && this.jugadaMaquina === 'papel')
  //   ) {
  //     this.resultadoJuego = '¡Ganaste!';
  //   } else {
  //     this.resultadoJuego = 'Perdiste';
  //   }
  // }

  // realizarJugada(jugadaUsuario: string): void {
  //   this.compararJugadas(jugadaUsuario);
  // }
// }
