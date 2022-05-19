import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncompetenceComponent } from './gestioncompetence.component';

describe('GestioncompetenceComponent', () => {
  let component: GestioncompetenceComponent;
  let fixture: ComponentFixture<GestioncompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
