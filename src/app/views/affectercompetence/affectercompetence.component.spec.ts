import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectercompetenceComponent } from './affectercompetence.component';

describe('AffectercompetenceComponent', () => {
  let component: AffectercompetenceComponent;
  let fixture: ComponentFixture<AffectercompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectercompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectercompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
