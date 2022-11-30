import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUseComponent } from './event-use.component';

describe('EventUseComponent', () => {
  let component: EventUseComponent;
  let fixture: ComponentFixture<EventUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
