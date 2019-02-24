import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNewsDetalisComponent } from './last-news-detalis.component';

describe('LastNewsDetalisComponent', () => {
  let component: LastNewsDetalisComponent;
  let fixture: ComponentFixture<LastNewsDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastNewsDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNewsDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
