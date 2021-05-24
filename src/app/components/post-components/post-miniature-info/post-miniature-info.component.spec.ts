import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMiniatureInfoComponent } from './post-miniature-info.component';

describe('PostMiniatureInfoComponent', () => {
  let component: PostMiniatureInfoComponent;
  let fixture: ComponentFixture<PostMiniatureInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMiniatureInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMiniatureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
