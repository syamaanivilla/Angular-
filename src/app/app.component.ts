import { Component } from '@angular/core';
import { Player } from 'src/Player';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // currentItem = 'laptop';
  today: number = Date.now();
  // parentFunction(value: string) {
  //   console.log(value);
  // myEvent(value: string) {
  //   console.log(value);
  // }
  addPlayer(plr: Player) {
    console.log(plr.id + ' ' + plr.name + ' ' + plr.category);
  }
}
