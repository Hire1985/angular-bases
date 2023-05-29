import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero: string  | undefined = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
