import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockIfComponent } from './block-if.component';

describe('BlockIfComponent', () => {
  let component: BlockIfComponent;
  let fixture: ComponentFixture<BlockIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockIfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
