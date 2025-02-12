import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public listCharacters: Character[] = [];

  @Output() public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeletedCharacter(id?:string): void {
    if (!id) return;
    this.onDeleted.emit(id);
    console.log('Deleted character', id);
  }
  
}
