import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordChefComponent } from './dashbord-chef.component';

describe('DashbordChefComponent', () => {
  let component: DashbordChefComponent;
  let fixture: ComponentFixture<DashbordChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
