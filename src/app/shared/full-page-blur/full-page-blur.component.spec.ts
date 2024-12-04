import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageBlurComponent } from './full-page-blur.component';

describe('FullPageBlurComponent', () => {
  let component: FullPageBlurComponent;
  let fixture: ComponentFixture<FullPageBlurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullPageBlurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullPageBlurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
