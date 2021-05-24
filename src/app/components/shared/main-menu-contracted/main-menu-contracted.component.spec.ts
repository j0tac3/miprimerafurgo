import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuContractedComponent } from './main-menu-contracted.component';

describe('MainMenuContractedComponent', () => {
  let component: MainMenuContractedComponent;
  let fixture: ComponentFixture<MainMenuContractedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuContractedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuContractedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
