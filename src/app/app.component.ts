import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'PWA Install Demo';
  showInstallButton = false;
  deferredPrompt: any;

  ngOnInit() {
    console.log('Checking PWA installation status');
    if (!this.isRunningStandalone()) {
      console.log('Listening for beforeinstallprompt');
      window.addEventListener(
        'beforeinstallprompt',
        this.onBeforeInstallPrompt
      );
      window.addEventListener('appinstalled', () => {
        console.log('App installed successfully');
        this.showInstallButton = false;
      });
    } else {
      console.log('App is running in standalone mode');
    }
 
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }

  private onBeforeInstallPrompt = (e: Event) => {
    e.preventDefault();
    this.deferredPrompt = e;
    this.showInstallButton = true;
  };

  installPwa() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        this.deferredPrompt = null;
        this.showInstallButton = false;
      });
    }
  }

  isRunningStandalone(): boolean {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://') ||
      window.location.search.includes('mode=standalone')
    );
  }
}
