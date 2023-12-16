import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddControlFormatComponent } from './list-add-control-format.component';

describe('ListAddControlFormatComponent', () => {
  let component: ListAddControlFormatComponent;
  let fixture: ComponentFixture<ListAddControlFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAddControlFormatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAddControlFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
