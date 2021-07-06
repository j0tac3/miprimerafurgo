import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventuraTarjetComponent } from './aventura-tarjet.component';

describe('AventuraTarjetComponent', () => {
  let component: AventuraTarjetComponent;
  let fixture: ComponentFixture<AventuraTarjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AventuraTarjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AventuraTarjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
