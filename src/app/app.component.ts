import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './auth/auth.service';
import * as schema from './schema/equipment.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private userSubscription: Subscription;
  private user: any;

  constructor(
    private authService: AuthService,
  ) {}

  public ngOnInit() {
    this.userSubscription = this.authService.$userSource.subscribe((user) => {
      this.user = user;
    })
  }

}
