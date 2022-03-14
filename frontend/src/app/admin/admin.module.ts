import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AdminComponent } from './components/admin.component';
import { NewsComponent } from './components/news/news.component';
import { ManageComponent } from './components/manage/manage.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { LayoutsModule } from '../shared/layouts/layouts.module';
import { ManageMantanComponent } from './components/manage/components/manage-mantan/manage-mantan.component';
import { NavModeComponent } from './components/manage/nav-mode/nav-mode.component';
import { ManageSelingkuhanComponent } from './components/manage/components/manage-selingkuhan/manage-selingkuhan.component';
import { ManagePacarComponent } from './components/manage/components/manage-pacar/manage-pacar.component';
import { MantanService } from './components/manage/components/manage-mantan/services/mantan.service';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
    { path: 'news', component: NewsComponent },
    { path: 'manage',  component: ManageComponent, children: [
      { path: '', redirectTo: 'mantan', pathMatch: 'full'},
      { path: 'mantan', component: ManageMantanComponent }, 
      { path: 'pacar', component: ManagePacarComponent },  
      { path: 'selingkuhan', component: ManageSelingkuhanComponent }  
    ]},
    { path: 'progress', component: ProgressComponent },
    { path: 'archieve', component: ArchieveComponent }
  ] },
  { path: '', redirectTo: 'admin/news', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AdminComponent,
    NewsComponent,
    ProgressComponent,
    ArchieveComponent,
    ManageComponent,
    ManageMantanComponent,
    ManagePacarComponent,
    ManageSelingkuhanComponent,
    NavModeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    LayoutsModule,
  ],
  providers: [
    MantanService
  ]
})


export class AdminModule { }
