import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidInstallComponent } from './android-install.component';

describe('AndroidInstallComponent', () => {
  let component: AndroidInstallComponent;
  let fixture: ComponentFixture<AndroidInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidInstallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
