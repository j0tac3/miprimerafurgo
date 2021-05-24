import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMiniatureInfoComponent } from './user-miniature-info.component';

describe('UserMiniatureInfoComponent', () => {
  let component: UserMiniatureInfoComponent;
  let fixture: ComponentFixture<UserMiniatureInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMiniatureInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMiniatureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
