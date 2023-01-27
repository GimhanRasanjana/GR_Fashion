import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatcomComponent } from './chatcom.component';

describe('ChatcomComponent', () => {
  let component: ChatcomComponent;
  let fixture: ComponentFixture<ChatcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
