import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalConeComponent } from './fal-cone.component';

describe('FalConeComponent', () => {
  let component: FalConeComponent;
  let fixture: ComponentFixture<FalConeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalConeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalConeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
