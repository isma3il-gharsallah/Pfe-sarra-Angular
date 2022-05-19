import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecompetenceComponent } from './deletecompetence.component';

describe('DeletecompetenceComponent', () => {
  let component: DeletecompetenceComponent;
  let fixture: ComponentFixture<DeletecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
