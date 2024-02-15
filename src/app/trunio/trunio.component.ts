import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trunio',
  templateUrl: './trunio.component.html',
  styleUrls: ['./trunio.component.css']
})
export class TrunioComponent {
  @Input() saludo: string | undefined;
}
