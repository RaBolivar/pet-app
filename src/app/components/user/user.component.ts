import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log("List of users:", this.users);
    });
  }
}
