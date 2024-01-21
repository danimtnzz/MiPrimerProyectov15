import { Component } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})

export class PiedraPapelTijeraComponent {
  opciones = ['piedra', 'papel', 'tijeras'];
  jugadaMaquina: string = '';
  resultadoJuego: string = '';

  obtenerJugadaMaquina(): void {
    const opcionRandom = Math.floor(Math.random() * this.opciones.length);
    this.jugadaMaquina = this.opciones[opcionRandom];
  }

  compararJugadas(jugadaUsuario: string): void {
    this.obtenerJugadaMaquina();

    if (jugadaUsuario === this.jugadaMaquina) {
      this.resultadoJuego = 'Empate';
    } else if (
      (jugadaUsuario === 'piedra' && this.jugadaMaquina === 'tijeras') ||
      (jugadaUsuario === 'papel' && this.jugadaMaquina === 'piedra') ||
      (jugadaUsuario === 'tijeras' && this.jugadaMaquina === 'papel')
    ) {
      this.resultadoJuego = '¡Ganaste!';
    } else {
      this.resultadoJuego = 'Perdiste';
    }
  }

  realizarJugada(jugadaUsuario: string): void {
    this.compararJugadas(jugadaUsuario);
  }
}
