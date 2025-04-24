import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsInstallComponent } from './windows-install.component';

describe('WindowsInstallComponent', () => {
  let component: WindowsInstallComponent;
  let fixture: ComponentFixture<WindowsInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsInstallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
