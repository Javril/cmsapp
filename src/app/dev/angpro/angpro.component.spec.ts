import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngproComponent } from './angpro.component';

describe('AngproComponent', () => {
  let component: AngproComponent;
  let fixture: ComponentFixture<AngproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
