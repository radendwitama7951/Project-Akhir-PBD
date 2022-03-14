import { Component, OnInit } from '@angular/core';
import { MenuList } from '../../types/menu-list.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public menuList: MenuList[] = [
    { display: 'NEWS', link: 'news' },
    { display: 'MANAGE', link: 'manage' },
    { display: 'PROGRESS', link: 'progress' },
    { display: 'ARCHIEVE', link: 'archieve' }
  ];




  
  

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
