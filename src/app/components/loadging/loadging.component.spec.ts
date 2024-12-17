import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadgingComponent } from './loadging.component';

describe('LoadgingComponent', () => {
  let component: LoadgingComponent;
  let fixture: ComponentFixture<LoadgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadgingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
