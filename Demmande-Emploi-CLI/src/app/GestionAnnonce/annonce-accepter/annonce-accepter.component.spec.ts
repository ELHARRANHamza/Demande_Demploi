import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceAccepterComponent } from './annonce-accepter.component';

describe('AnnonceAccepterComponent', () => {
  let component: AnnonceAccepterComponent;
  let fixture: ComponentFixture<AnnonceAccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceAccepterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
