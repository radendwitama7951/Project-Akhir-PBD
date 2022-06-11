import { Component } from '@angular/core';
import { LaporanComponentService } from './core/services/laporan-component.service';
import { LaporanService } from './core/services/laporan.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
