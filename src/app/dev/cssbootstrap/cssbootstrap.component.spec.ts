import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbootstrapComponent } from './cssbootstrap.component';

describe('CssbootstrapComponent', () => {
  let component: CssbootstrapComponent;
  let fixture: ComponentFixture<CssbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
