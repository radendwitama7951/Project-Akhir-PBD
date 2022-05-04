import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  private subscriptions: Subscription = new Subscription();
  public activeUser$!: Observable<UserInterface>;
  public loading$!: Observable<boolean>;

  public showPassword: boolean = false;

  public activeUserDetailForm: FormGroup = null;

  constructor(private _userService: UserService, private fb: FormBuilder) {
    this.loading$ = this._userService.loading$;
    this.activeUser$ = this._userService.selectEntityById(1);

    this.subscriptions.add(
      this.activeUser$.subscribe((user: UserInterface) => {
        this.activeUserDetailForm = this.fb.group({
          first_name: [user.first_name, [Validators.required]],
          last_name: [user.last_name, [Validators.required]],
          password: [user.password, [Validators.required]],
          email: [user.email, [Validators.required, Validators.email]],
        });
        console.log(user);
      })
    );
  }

  ngOnInit() {}

  simpanUserDetail(): void {
    this.activeUser$.subscribe((user: UserInterface) => {
      this._userService.update({
        ...user,
        ...this.activeUserDetailForm.value,
      });
    });
  }

  onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
}
