import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()

  public characterList: Character[] = [{

    name:'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter;


  onDeleteCharacter(id: string): void {
    // TODO: Emitir el ID del personaje

    this.onDelete.emit(id)
  }
  constructor() { }
  ngOnInit(): void {
  }

}
