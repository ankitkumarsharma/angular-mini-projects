import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAddControlFormatComponent } from './static-add-control-format.component';

describe('StaticAddControlFormatComponent', () => {
  let component: StaticAddControlFormatComponent;
  let fixture: ComponentFixture<StaticAddControlFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticAddControlFormatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticAddControlFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
