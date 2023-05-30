import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {
    name: '',
    power: 0
  }
  emitCharacter(): void {
    console.log('Desde el hijo', this.character)
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)
    // this.character.name = '',
    // this.character.power = 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
