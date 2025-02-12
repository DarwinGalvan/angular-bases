import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Trunks', power: 8000 },
    { id: uuid(), name: 'Gohan', power: 12000 },
    { id: uuid(), name: 'Piccolo', power: 5000 },
    { id: uuid(), name: 'Krillin', power: 2000 },
  ];

  onEventCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   console.log('Deleted character', index);
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void { 
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() {}
}
