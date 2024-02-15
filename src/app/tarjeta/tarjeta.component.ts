import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() imagen:string | undefined;
  @Input() descripcion:string | undefined;
  @Input() edad:number | undefined;
  @Input() nombre:string | undefined;

  @Output() datosEnviados = new EventEmitter<string>();

  enviarDatos(){
    this.datosEnviados.emit('He seleccionado el personaje: ' + this.nombre);
  }
}
