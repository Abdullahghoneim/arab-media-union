import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalOfficesComponent } from './national-offices.component';

describe('NationalOfficesComponent', () => {
  let component: NationalOfficesComponent;
  let fixture: ComponentFixture<NationalOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
