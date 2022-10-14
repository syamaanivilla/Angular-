import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <p>style-binding works!!!!!!</p>
    <h2 [style.color]="'orange'">angular</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">react</h2>
    <h2 [style.color]="sal < 50000 ? 'gray' : 'blue'">{{ sal }}</h2>

    <h2 [style.color]="mycolor">Vue</h2>
    <h2 [ngStyle]="titileStyles">javascript</h2>
  `,
  styles: [],
})
export class StyleBindingComponent implements OnInit {
  hasError = false;
  sal: number = 59000;
  mycolor = 'brown';

  titileStyles = {
    color: 'yellow',
    fontstyle: 'bold',
  };

  constructor() {}

  ngOnInit(): void {}
}
