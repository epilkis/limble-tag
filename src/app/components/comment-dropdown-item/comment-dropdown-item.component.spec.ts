import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDropdownItemComponent } from './comment-dropdown-item.component';

describe('CommentDropdownItemComponent', () => {
  let component: CommentDropdownItemComponent;
  let fixture: ComponentFixture<CommentDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDropdownItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
