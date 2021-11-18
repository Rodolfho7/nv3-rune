import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTextHeaderComponent } from './editor-text-header.component';

describe('EditorTextHeaderComponent', () => {
  let component: EditorTextHeaderComponent;
  let fixture: ComponentFixture<EditorTextHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorTextHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTextHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
