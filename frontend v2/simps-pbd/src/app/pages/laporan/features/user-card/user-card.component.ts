import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit, OnDestroy {
  public activeUser$!: Observable<UserInterface>;
  private subscriptions: Subscription = new Subscription();

  constructor(private _userService: UserService) {
    this.subscriptions.add(
      this._userService.collection$.subscribe((collection: any) => {
        this.activeUser$ = of(collection.entities[1]);
      })
    );
  }
  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
