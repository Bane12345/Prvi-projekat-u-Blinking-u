import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeCardComponent } from './empoyee-card.component';

describe('EmpoyeeCardComponent', () => {
  let component: EmpoyeeCardComponent;
  let fixture: ComponentFixture<EmpoyeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoyeeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
