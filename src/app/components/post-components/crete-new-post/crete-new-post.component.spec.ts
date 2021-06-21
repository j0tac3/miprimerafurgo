import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteNewPostComponent } from './crete-new-post.component';

describe('CreteNewPostComponent', () => {
  let component: CreteNewPostComponent;
  let fixture: ComponentFixture<CreteNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
