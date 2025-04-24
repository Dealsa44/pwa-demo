import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaInfoComponent } from './pwa-info.component';

describe('PwaInfoComponent', () => {
  let component: PwaInfoComponent;
  let fixture: ComponentFixture<PwaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwaInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
