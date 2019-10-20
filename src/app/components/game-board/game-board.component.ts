import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/helpers/state';
import { Turn } from 'src/app/helpers/turn';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  @Input()
  size: number = 3;

  @Input()
  serieToWin: number = 3;

  gridSize: object;
  elemStates: State[];
  turn: Turn;

  constructor() {
  }

  ngOnInit() {
    this.gridSize = {
      'grid-template-columns': `repeat(${this.size}, 50px)`
    }
    this.elemStates = Array.from({length: this.size * this.size}).map(() => 0)
    this.turn = Turn.circle;
  }

  gameElemClicked(index: number) {
    if (this.elemStates[index] !== State.blank)
      return;

    let elementNewState = State.blank;
    
    switch(this.turn) {
      case Turn.circle:
        elementNewState = State.circle;
        break;
      case Turn.corss:
        elementNewState = State.cross;
        break;
    }

    if (this.turn === Turn.circle) {
      this.turn = Turn.corss;
    } else if (this.turn === Turn.corss) {
      this.turn = Turn.circle;
    }

    this.elemStates[index] = elementNewState;
    this.checkState(index);
  }

  private checkState(index) { // TODO
    let winType1: number[] = [index];
    let winType2: number[] = [index];
    let winType3: number[] = [index];
    let winType4: number[] = [index];

    for (let i = 1; i < this.serieToWin; i++) {
      
    }
  }

}
