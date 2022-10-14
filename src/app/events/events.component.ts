import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <p>events works!</p>
    <button (click)="onClick($event)">Click me</button>
    <button (click)="msg = 'my msg'">Click</button>

    message:{{ msg }}
  `,
  styles: [],
})
export class EventsComponent implements OnInit {
  msg: string = '';
  constructor() {}

  ngOnInit(): void {}
  onClick(event: any) {
    console.log(event);
    this.msg = event.type;
  }
}
