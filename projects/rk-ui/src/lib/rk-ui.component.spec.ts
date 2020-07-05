import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkUiComponent } from './rk-ui.component';

describe('RkUiComponent', () => {
  let component: RkUiComponent;
  let fixture: ComponentFixture<RkUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
