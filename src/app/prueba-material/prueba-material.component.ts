import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-prueba-material',
  templateUrl: './prueba-material.component.html',
  styleUrls: ['./prueba-material.component.css']
})
export class PruebaMaterialComponent implements OnInit {
 
  ngOnInit(): void {
      this.aumentarProgreso();
  }

  value:number = 0; //int value = 9;
  

  async aumentarProgreso(){
    while(this.value<100){
      await new Promise(f => setTimeout(f, 1000));
      this.value+=5;
    }
  }
}
