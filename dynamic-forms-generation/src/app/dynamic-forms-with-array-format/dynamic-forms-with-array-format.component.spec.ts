import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsWithArrayFormatComponent } from './dynamic-forms-with-array-format.component';

describe('DynamicFormsWithArrayFormatComponent', () => {
  let component: DynamicFormsWithArrayFormatComponent;
  let fixture: ComponentFixture<DynamicFormsWithArrayFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormsWithArrayFormatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFormsWithArrayFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
