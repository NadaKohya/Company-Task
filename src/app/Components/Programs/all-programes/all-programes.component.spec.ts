import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProgramesComponent } from './all-programes.component';

describe('AllProgramesComponent', () => {
  let component: AllProgramesComponent;
  let fixture: ComponentFixture<AllProgramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProgramesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProgramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
