import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  template: `
    <p>condition works!</p>
    <h2 *ngIf="displayName; then first; else other">show me</h2>
    <ng-template #first>
      <h1>first content</h1>
    </ng-template>
    <ng-template #other>
      <h1>other content!</h1>
      <div>
        <p>parah</p>
      </div>
    </ng-template>
  `,
  styles: [],
})
export class ConditionComponent implements OnInit {
  displayName: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
