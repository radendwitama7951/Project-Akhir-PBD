import { Component, OnInit } from '@angular/core';
import { EntityServices } from '@ngrx/data';
import { EntityCollectionService } from '@ngrx/data';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  private userService!: EntityCollectionService<UserInterface>;
  public userDatasource$!: Observable<UserInterface[]>;

  constructor(
    private entityServices: EntityServices,
    private _userService: UserService
  ) {
    this.userService = entityServices.getEntityCollectionService('User');
    this.userDatasource$ = this._userService.getAll();
    this._userService.getAll().subscribe(console.log);
  }

  ngOnInit() {}

  public readUser(): void {
    this._userService.getAll().subscribe(console.log);
  }

  public createUser(): void {
    this._userService.post({
      email: 'newest@gmail.com',
      first_name: 'pjok',
      last_name: 'pjokjk',
      password: 'fjwf989f',
    });
  }
}
