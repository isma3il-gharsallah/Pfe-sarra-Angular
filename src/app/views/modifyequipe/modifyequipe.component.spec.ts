import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyequipeComponent } from './modifyequipe.component';

describe('ModifyequipeComponent', () => {
  let component: ModifyequipeComponent;
  let fixture: ComponentFixture<ModifyequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
