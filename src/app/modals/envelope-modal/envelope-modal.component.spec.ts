import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeModalComponent } from './envelope-modal.component';

describe('EnvelopeModalComponent', () => {
  let component: EnvelopeModalComponent;
  let fixture: ComponentFixture<EnvelopeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvelopeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
