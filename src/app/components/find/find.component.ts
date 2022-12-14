import { UserService } from 'src/app/services/user.service';
import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { of } from 'rxjs';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title: string = 'Find User By Id'
  userId: number = 0;
  user: User = new User(0, '', '', '', '', '', [])
  clientMessage: ClientMessage = new ClientMessage('');

  constructor(private userService: UserService) { }

  findUser() {
    // call the user service's findUserById() method
    this.userService.findUserById(this.userId)
    .subscribe({
      next: (data) => {
        this.user = data;
        this.clientMessage.message = '';
      },
      error: () => this.clientMessage.message = `Can't find the User with id ${this.userId}`,
      complete: () => console.log('complete')
    })
  }
}
