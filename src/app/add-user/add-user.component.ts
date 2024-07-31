import { Component } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers:[UserServiceService]
})
export class AddUserComponent {
  userName: string='';
  status:string='active';

  constructor( private userService:UserServiceService){

  }
  // AddUser(){
  //   this.userService.AddNewUser(this.userName, this.status);
  //   console.log(this.userService.users);
  // }

}
