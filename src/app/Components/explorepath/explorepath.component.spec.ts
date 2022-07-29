import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorepathComponent } from './explorepath.component';

describe('ExplorepathComponent', () => {
  let component: ExplorepathComponent;
  let fixture: ComponentFixture<ExplorepathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorepathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorepathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
