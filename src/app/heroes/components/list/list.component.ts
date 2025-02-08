import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public nameHeroes:string[] = ['Spiderman', 'Batman', 'Superman', 'Wonder', 'Ironman'];
public deleteHero?:string;

constructor() {}

removeHero():void {
  this.deleteHero = this.nameHeroes.pop();
} 
 

}
