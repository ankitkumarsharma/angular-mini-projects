import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDeferComponent } from './block-defer.component';

describe('BlockDeferComponent', () => {
  let component: BlockDeferComponent;
  let fixture: ComponentFixture<BlockDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockDeferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
