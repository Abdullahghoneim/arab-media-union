import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViedosLibComponent } from './viedos-lib.component';

describe('ViedosLibComponent', () => {
  let component: ViedosLibComponent;
  let fixture: ComponentFixture<ViedosLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViedosLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViedosLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
