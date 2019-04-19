import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusLinesComponent } from './bus-lines.component';

describe('BusLinesComponent', () => {
  let component: BusLinesComponent;
  let fixture: ComponentFixture<BusLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
