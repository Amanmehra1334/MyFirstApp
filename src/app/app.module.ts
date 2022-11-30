import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventUseComponent } from './event-use/event-use.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EventUseComponent,
    VoteTakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
