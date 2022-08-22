import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCommentComponent } from './btn-comment.component';

describe('BtnCommentComponent', () => {
  let component: BtnCommentComponent;
  let fixture: ComponentFixture<BtnCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
