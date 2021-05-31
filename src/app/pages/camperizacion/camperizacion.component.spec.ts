import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperizacionComponent } from './camperizacion.component';

describe('CamperizacionComponent', () => {
  let component: CamperizacionComponent;
  let fixture: ComponentFixture<CamperizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamperizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
