import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  master = "Aman";
  ischild = false;
  title = 'Digital-Binder';

  callchild(){
    this.ischild =!this.ischild;
  }
}
