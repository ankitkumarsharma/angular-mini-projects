import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitMangoComponent } from './fruit-mango.component';

describe('FruitMangoComponent', () => {
  let component: FruitMangoComponent;
  let fixture: ComponentFixture<FruitMangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitMangoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitMangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
