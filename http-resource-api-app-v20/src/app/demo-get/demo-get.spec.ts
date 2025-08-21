import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGet } from './demo-get';

describe('DemoGet', () => {
  let component: DemoGet;
  let fixture: ComponentFixture<DemoGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoGet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoGet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
