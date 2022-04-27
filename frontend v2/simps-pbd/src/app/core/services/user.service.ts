import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  EntityCollectionServiceBase,
} from '@ngrx/data';
import { EntityCollectionService } from '@ngrx/data';
import { UserInterface } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityCollectionServiceBase<UserInterface> {
  private readonly userApiUrl: string = environment.apiUrl + 'user/';
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private httpClient: HttpClient
  ) {
    super('User', serviceElementsFactory);
  }

  public post(data: UserInterface): void {
    this.httpClient
      .post<UserInterface>(this.userApiUrl, data)
      .subscribe(console.log);
  }
}
