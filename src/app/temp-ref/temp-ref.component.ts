import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref',
  template: ` <p>temp-ref works!</p>
    <input type="text" #myInput />
    <button (click)="logMessage(myInput.value)">Login</button><br />
    <input type="text" #Input />
    <button (click)="printMessage(Input.value)">Login1</button>`,
  styles: [],
})
export class TempRefComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  logMessage(value: any) {
    console.log(value);
  }
  printMessage(value: any) {
    console.log(value);
  }
}
