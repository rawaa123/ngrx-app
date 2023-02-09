import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLiatComponent } from './posts-liat.component';

describe('PostsLiatComponent', () => {
  let component: PostsLiatComponent;
  let fixture: ComponentFixture<PostsLiatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsLiatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsLiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
