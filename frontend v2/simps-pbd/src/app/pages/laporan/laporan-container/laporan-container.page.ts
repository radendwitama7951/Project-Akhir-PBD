import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-laporan-container',
  templateUrl: './laporan-container.page.html',
  styleUrls: ['./laporan-container.page.scss'],
})
export class LaporanContainerPage implements OnInit {
  public today: Date = new Date(Date.now());
  constructor() {}

  ngOnInit() {}
}
