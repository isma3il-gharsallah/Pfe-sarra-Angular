import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojetadminComponent } from './addprojetadmin.component';

describe('AddprojetadminComponent', () => {
  let component: AddprojetadminComponent;
  let fixture: ComponentFixture<AddprojetadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojetadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojetadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
