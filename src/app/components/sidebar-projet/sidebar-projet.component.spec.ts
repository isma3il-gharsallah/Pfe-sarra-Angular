import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProjetComponent } from './sidebar-projet.component';

describe('SidebarProjetComponent', () => {
  let component: SidebarProjetComponent;
  let fixture: ComponentFixture<SidebarProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
