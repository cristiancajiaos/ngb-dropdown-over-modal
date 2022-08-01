import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondModalComponent } from './diamond-modal.component';

describe('DiamondModalComponent', () => {
  let component: DiamondModalComponent;
  let fixture: ComponentFixture<DiamondModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamondModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
