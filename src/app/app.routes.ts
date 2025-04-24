import { Routes } from '@angular/router';
import { PwaInfoComponent } from './platforms/pwa-info/pwa-info.component';
import { AndroidInstallComponent } from './platforms/android-install/android-install.component';
import { IosInstallComponent } from './platforms/ios-install/ios-install.component';
import { WindowsInstallComponent } from './platforms/windows-install/windows-install.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pwa-info', pathMatch: 'full' },
  { path: 'pwa-info', component: PwaInfoComponent },
  { path: 'android', component: AndroidInstallComponent },
  { path: 'ios', component: IosInstallComponent },
  { path: 'windows', component: WindowsInstallComponent },
];