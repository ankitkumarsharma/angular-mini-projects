import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddControlWithArrayFormatComponent } from './list-add-control-with-array-format.component';

describe('ListAddControlWithArrayFormatComponent', () => {
  let component: ListAddControlWithArrayFormatComponent;
  let fixture: ComponentFixture<ListAddControlWithArrayFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAddControlWithArrayFormatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAddControlWithArrayFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
