import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPost } from './demo-post';

describe('DemoPost', () => {
  let component: DemoPost;
  let fixture: ComponentFixture<DemoPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
