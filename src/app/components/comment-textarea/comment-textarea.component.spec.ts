import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTextareaComponent } from './comment-textarea.component';

describe('CommentTextareaComponent', () => {
  let component: CommentTextareaComponent;
  let fixture: ComponentFixture<CommentTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
