import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitOthersComponent } from './fruit-others.component';

describe('FruitOthersComponent', () => {
  let component: FruitOthersComponent;
  let fixture: ComponentFixture<FruitOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitOthersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
