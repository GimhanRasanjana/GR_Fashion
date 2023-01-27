import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorychooserComponent } from './categorychooser.component';

describe('CategorychooserComponent', () => {
  let component: CategorychooserComponent;
  let fixture: ComponentFixture<CategorychooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorychooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorychooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
