import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Player } from 'src/Player';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() item = '';
  // @Output() bollywoodEvent = new EventEmitter<string>();
  // @Output bollywoodEvent = new EventEmitter()<string>;
  @Output() playerEvent = new EventEmitter<Player>();
  constructor() {}

  ngOnInit(): void {}
  // sendPlayer() {
  //   this.playerEvent.emit('syama');
  // }
  // addBollywood() {
  //   this.bollywoodEvent.emit('Katrina');
  // }
  appPlayer() {
    var plr: Player = {
      id: 1,
      name: 'virat',
      category: 'batter',
    };

    this.playerEvent.emit(plr);
  }
}
