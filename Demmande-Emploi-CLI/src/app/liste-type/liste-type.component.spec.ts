import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeComponent } from './liste-type.component';

describe('ListeTypeComponent', () => {
  let component: ListeTypeComponent;
  let fixture: ComponentFixture<ListeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
