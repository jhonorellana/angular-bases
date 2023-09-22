
import { Component } from "@angular/core";

@Component({
   selector: 'app-counter',
   template: `

   <h1>Inicio app counter</h1>
   <p> Counter: {{ counter }} jaja </p>

   <button (click)="increaseBy(1)"> + 1 </button>
   <button (click)="reset()"> Reset </button>
   <button (click)="increaseBy(-1)"> - 1 </button>

   <h1>FIN app counter</h1>

   `
   ,
})


export class CounterComponent{
  public counter: number = 10;

  increaseBy( valor: number): void{
    this.counter += valor;
  }

  reset(): void{
    this.counter = 10;
  }

}


