import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapWithServiceComponent } from './switch-map-with-service.component';

describe('SwitchMapWithServiceComponent', () => {
  let component: SwitchMapWithServiceComponent;
  let fixture: ComponentFixture<SwitchMapWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchMapWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
