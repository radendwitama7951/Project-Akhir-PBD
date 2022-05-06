import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';
import { UserAvatarDialog, UserPage } from './user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserPageRoutingModule,
    MatDialogModule,
  ],
  declarations: [UserPage, UserAvatarDialog],
})
export class UserPageModule {}
