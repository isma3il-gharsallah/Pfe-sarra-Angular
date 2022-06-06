import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymoduleComponent } from './modifymodule.component';

describe('ModifymoduleComponent', () => {
  let component: ModifymoduleComponent;
  let fixture: ComponentFixture<ModifymoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifymoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
