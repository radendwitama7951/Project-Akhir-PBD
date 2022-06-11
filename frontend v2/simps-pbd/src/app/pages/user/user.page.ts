import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  public activeUser$!: Observable<UserInterface>;
  public loading$!: Observable<boolean>;

  public showPassword: boolean = false;

  public activeUserDetailForm: FormGroup = null;

  constructor(
    private dialog: MatDialog,
    private _userService: UserService,
    private fb: FormBuilder
  ) {
    this.loading$ = this._userService.loading$;
    this.activeUser$ = this._userService.selectEntityById(1);

    this.subscriptions.add(
      this.activeUser$.subscribe((user: UserInterface) => {
        this.activeUserDetailForm = this.fb.group({
          first_name: [user?.first_name, [Validators.required]],
          last_name: [user?.last_name, [Validators.required]],
          password: [user?.password, [Validators.required]],
          email: [user?.email, [Validators.required, Validators.email]],
        });
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this._userService.load();
  }

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

  openUserAvatarDialog(): void {
    const dialogRef: MatDialogRef<UserAvatarDialog> = this.dialog.open(
      UserAvatarDialog,
      {
        data: this.activeUser$,
      }
    );

    dialogRef.afterClosed().subscribe((avatarChanged: string) => {
      if (!avatarChanged) return;
      this.activeUser$
        .pipe(
          switchMap((activeUser: UserInterface) =>
            of({ ...activeUser, ...{ avatar: avatarChanged } })
          )
        )
        .subscribe((updatedUser: UserInterface) => {
          this._userService.update(updatedUser);
        });
    });
  }
}

@Component({
  templateUrl: './user-avatar-dialog.component.html',
  styleUrls: ['./user.page.scss'],
})
export class UserAvatarDialog implements OnDestroy {
  public userAvatarControl?: FormControl;
  private subscriptions: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Observable<UserInterface>
  ) {
    this.subscriptions.add(
      this.data.subscribe(
        (user: UserInterface) =>
          (this.userAvatarControl = new FormControl(user.avatar, [
            Validators.required,
            Validators.maxLength(200),
          ]))
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
