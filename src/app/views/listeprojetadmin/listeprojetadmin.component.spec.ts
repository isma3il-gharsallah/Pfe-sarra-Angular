import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprojetadminComponent } from './listeprojetadmin.component';

describe('ListeprojetadminComponent', () => {
  let component: ListeprojetadminComponent;
  let fixture: ComponentFixture<ListeprojetadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeprojetadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeprojetadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
