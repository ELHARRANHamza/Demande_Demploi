import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSectorComponent } from './liste-sector.component';

describe('ListeSectorComponent', () => {
  let component: ListeSectorComponent;
  let fixture: ComponentFixture<ListeSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
