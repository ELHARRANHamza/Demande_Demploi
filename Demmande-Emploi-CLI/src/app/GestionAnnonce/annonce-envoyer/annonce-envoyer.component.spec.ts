import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceEnvoyerComponent } from './annonce-envoyer.component';

describe('AnnonceEnvoyerComponent', () => {
  let component: AnnonceEnvoyerComponent;
  let fixture: ComponentFixture<AnnonceEnvoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceEnvoyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceEnvoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
