import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmoduleComponent } from './gestionmodule.component';

describe('GestionmoduleComponent', () => {
  let component: GestionmoduleComponent;
  let fixture: ComponentFixture<GestionmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
