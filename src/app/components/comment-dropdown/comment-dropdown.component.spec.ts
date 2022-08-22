import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDropdownComponent } from './comment-dropdown.component';

describe('CommentDropdownComponent', () => {
  let component: CommentDropdownComponent;
  let fixture: ComponentFixture<CommentDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
