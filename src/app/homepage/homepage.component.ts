import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input('master') mastername = '';

  constructor() {
    console.log("homepage hook is called");
    
  }
  
  ngOnInit(): void {
    console.log("homepage oninit hook is called");
    ;
  }

}
