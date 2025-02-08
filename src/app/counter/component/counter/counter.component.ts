import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: false,
    template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)" class ="btn btn-success"> +1 </button>
    <button (click)="reset()" class ="btn btn-primary"> Reset </button>
    <button (click)="decreaseBy()" class ="btn btn-danger"> -1 </button>`
})

export class CounterComponent{
    public counter: number = 10;

    increaseBy(value: number): void {
      this.counter += value;
    }
  
    decreaseBy(): void {
      this.counter -= 1;
    }
    reset(): void {
      this.counter = 10;
    }
}