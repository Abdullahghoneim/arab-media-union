import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLiberaryComponent } from './media-liberary.component';

describe('MediaLiberaryComponent', () => {
  let component: MediaLiberaryComponent;
  let fixture: ComponentFixture<MediaLiberaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaLiberaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLiberaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
