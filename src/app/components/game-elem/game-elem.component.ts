import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/helpers/state';

@Component({
  selector: 'app-game-elem',
  templateUrl: './game-elem.component.html',
  styleUrls: ['./game-elem.component.css']
})
export class GameElemComponent implements OnInit {

  @Input()
  state: State = State.blank;

  constructor() { }

  ngOnInit() {
  }

}
