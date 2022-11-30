import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `<h2>Should mankind colonize the Universe?</h2>
  <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>

  <app-event-use
    *ngFor="let voter of voters"
    [name]="voter"
    (voted)="onVoted($event)">
  </app-event-use>`,
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['aman','muskan','ajit','mamta'];
  onVoted(agreed:boolean){
    if (agreed){
      this.agreed++;
    }
    else{
      this.disagreed++;
    }
  }
}
