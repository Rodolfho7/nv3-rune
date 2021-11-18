import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTextParagraphComponent } from './editor-text-paragraph.component';

describe('TextParagraphComponent', () => {
  let component: EditorTextParagraphComponent;
  let fixture: ComponentFixture<EditorTextParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorTextParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTextParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
