import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuOptionComponent } from './main-menu-option.component';

describe('MainMenuOptionComponent', () => {
  let component: MainMenuOptionComponent;
  let fixture: ComponentFixture<MainMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
