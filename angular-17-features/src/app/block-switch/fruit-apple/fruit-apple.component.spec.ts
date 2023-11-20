import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitAppleComponent } from './fruit-apple.component';

describe('FruitAppleComponent', () => {
  let component: FruitAppleComponent;
  let fixture: ComponentFixture<FruitAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitAppleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
