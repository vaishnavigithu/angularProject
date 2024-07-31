import { Component, OnInit } from '@angular/core';
import { newUserService } from '../Services/newUser.service';

@Component({
  selector: 'app-all-users-details',
  templateUrl: './all-users-details.component.html',
  styleUrls: ['./all-users-details.component.css'],
  providers:[newUserService]
})
export class AllUsersDetailsComponent implements OnInit{

  constructor(private newUserService:newUserService) {
    
  }
  newUsers: {name:string,job:string ,gender:string,country:string,age:number}[] = [];

  ngOnInit(){
    // this.newUsers=this.newUserService.newUsers;
    //  this.newUserService.OnShowDetailsClicked.subscribe((data:{name:string,job:string ,gender:string,country:string,age:number})=>{
    //      this.newUsers = data;
  }
  // showDetails(newUser:{name:string,job:string ,gender:string,country:string,age:number}){
  //   this.newUserService.showUserDetails(newUser);
  // }
}
