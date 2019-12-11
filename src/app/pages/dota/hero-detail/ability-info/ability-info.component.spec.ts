import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityInfoComponent } from './ability-info.component';

describe('AbilityInfoComponent', () => {
  let component: AbilityInfoComponent;
  let fixture: ComponentFixture<AbilityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
