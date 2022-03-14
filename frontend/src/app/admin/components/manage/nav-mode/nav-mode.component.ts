import { Component, OnInit } from '@angular/core';
import { NavModeInteface } from '../types/nav-mode.interface';

@Component({
  selector: 'manage-nav-mode',
  templateUrl: './nav-mode.component.html',
  styleUrls: ['./nav-mode.component.scss']
})

export class NavModeComponent implements OnInit {
  public modeList: NavModeInteface[] = [
    { display: 'MANTAN', route: 'mantan' },
    { display: 'PACAR', route: 'pacar' },
    { display: 'SELINGKUHAN', route: 'selingkuhan' },
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
