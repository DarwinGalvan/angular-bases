import { Component} from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone: false
})

export class MainPageComponent  {

    public character: Character[] = [
        { name: 'Goku', power: 15000 },
        { name: 'Vegeta', power: 7500 },
        { name: 'Trunks', power: 8000 },
        { name: 'Gohan', power: 12000 },
        { name: 'Piccolo', power: 5000 },
        { name: 'Krillin', power: 2000 },
      ];

 
}