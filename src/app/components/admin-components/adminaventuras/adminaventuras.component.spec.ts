import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaventurasComponent } from './adminaventuras.component';

describe('AdminaventurasComponent', () => {
  let component: AdminaventurasComponent;
  let fixture: ComponentFixture<AdminaventurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaventurasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaventurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
