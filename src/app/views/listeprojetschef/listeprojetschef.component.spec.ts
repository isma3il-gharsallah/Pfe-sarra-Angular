import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprojetschefComponent } from './listeprojetschef.component';

describe('ListeprojetschefComponent', () => {
  let component: ListeprojetschefComponent;
  let fixture: ComponentFixture<ListeprojetschefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeprojetschefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeprojetschefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
