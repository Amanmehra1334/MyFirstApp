import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-event-use',
  template: `<h4>{{name}}</h4>
  <button type="button" (click)="vote(true)"
  [disabled]="didVote">Agree</button>
    <button type="button" (click)="vote(false)" [disabled]="didVote">Disagree</button>>`,
  styleUrls: ['./event-use.component.css']
})
export class EventUseComponent {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  vote(agreed:boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
