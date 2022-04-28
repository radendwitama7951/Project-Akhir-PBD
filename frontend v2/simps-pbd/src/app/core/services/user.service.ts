import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  EntityCollectionServiceBase,
} from '@ngrx/data';
import { EntityCollectionService } from '@ngrx/data';
import { UserInterface } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';

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
    let templateData: UserInterface = {
      user_id: 0,
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      last_login: '',
    };

    this.keys$.subscribe(
      (keys: number[]) =>
        (templateData.user_id = Math.max.apply(null, keys) + 1)
    );

    this.entities$.pipe(first()).subscribe(console.log);

    this.add(data);

    /*
    this.httpClient
      .post<UserInterface>(this.userApiUrl, data)
      .subscribe((response: any) => {
        this.addOneToCache({ ...templateData, ...data });
      });
      */
  }
}
