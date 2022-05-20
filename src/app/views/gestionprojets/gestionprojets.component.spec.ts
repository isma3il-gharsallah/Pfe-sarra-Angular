import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprojetsComponent } from './gestionprojets.component';

describe('GestionprojetsComponent', () => {
  let component: GestionprojetsComponent;
  let fixture: ComponentFixture<GestionprojetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionprojetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
