import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMiniatureComponent } from './post-miniature.component';

describe('PostMiniatureComponent', () => {
  let component: PostMiniatureComponent;
  let fixture: ComponentFixture<PostMiniatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMiniatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
