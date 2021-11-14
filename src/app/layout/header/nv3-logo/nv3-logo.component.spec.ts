import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nv3LogoComponent } from './nv3-logo.component';

describe('Nv3LogoComponent', () => {
  let component: Nv3LogoComponent;
  let fixture: ComponentFixture<Nv3LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nv3LogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nv3LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
