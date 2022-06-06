import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetNavbarComponent } from './projet-navbar.component';

describe('ProjetNavbarComponent', () => {
  let component: ProjetNavbarComponent;
  let fixture: ComponentFixture<ProjetNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
