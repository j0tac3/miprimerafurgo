import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminarticulosComponent } from './adminarticulos.component';

describe('AdminarticulosComponent', () => {
  let component: AdminarticulosComponent;
  let fixture: ComponentFixture<AdminarticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminarticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminarticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
