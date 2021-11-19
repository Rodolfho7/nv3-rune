import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorHabilidadesComponent } from './editor-habilidades.component';

describe('EditorHabilidadesComponent', () => {
  let component: EditorHabilidadesComponent;
  let fixture: ComponentFixture<EditorHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
