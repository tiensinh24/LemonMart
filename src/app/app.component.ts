import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  displayAccountIcons = false;
  title = 'LemonMart';

  // Add custom icons into app
  constructor(iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private authService: AuthService) {

    iconRegistry.addSvgIcon(
      'lemon',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/lemon.svg')
    );
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(authStatus => {
      this.displayAccountIcons = authStatus.isAuthenticated;
    });
  }
}
