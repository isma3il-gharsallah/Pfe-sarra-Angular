import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcompetenceComponent } from './detailcompetence.component';

describe('DetailcompetenceComponent', () => {
  let component: DetailcompetenceComponent;
  let fixture: ComponentFixture<DetailcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
