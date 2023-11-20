import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockForComponent } from './block-for.component';

describe('BlockForComponent', () => {
  let component: BlockForComponent;
  let fixture: ComponentFixture<BlockForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockForComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
