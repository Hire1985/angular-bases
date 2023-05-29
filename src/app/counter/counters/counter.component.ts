import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter: number = 10;

  increasBy(value: number){
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
