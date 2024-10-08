import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouteInfo } from '../../route-info';
import { CommonModule } from '@angular/common';

export const ADMIN_ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard', icon: 'fa-solid fa-calendar text-blue', class: '' },
  { path: 'users', title: 'Users', icon: 'fa-solid fa-user text-blue', class: '' },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public menuItems: any[] = [];
  public isCollapsed = true;

  constructor(private router: Router){}

  ngOnInit() {
    this.menuItems = ADMIN_ROUTES.filter(menuItem => menuItem);

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
