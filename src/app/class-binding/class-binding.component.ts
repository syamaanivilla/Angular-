import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <p>class-binding works!</p>
    <h2>welcome:{{ name }}</h2>
    <h2 class="text-success">MYangular</h2>
    <h2 [class]="successClass">MYangular</h2>
    <h2 [class.text-danger]="haserror">MYangular</h2>
    <h2 [ngClass]="messageClasses">MYangular</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: purple;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class ClassBindingComponent implements OnInit {
  name: string = 'sachin';
  successClass = 'text-success';
  haserror = true;
  isSpecial = true;
  messageClasses = {
    'text-success': this.haserror,
    'text-danger': this.haserror,
    'text-special': this.isSpecial,
  };
  constructor() {}

  ngOnInit(): void {}
}
