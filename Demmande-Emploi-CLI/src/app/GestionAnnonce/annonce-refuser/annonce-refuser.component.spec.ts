import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceRefuserComponent } from './annonce-refuser.component';

describe('AnnonceRefuserComponent', () => {
  let component: AnnonceRefuserComponent;
  let fixture: ComponentFixture<AnnonceRefuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceRefuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceRefuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
