import { Component, OnInit } from '@angular/core';
import { newUserService } from '../Services/newUser.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent{
  constructor(private newUserService: newUserService) {
    
  }

  // newUser: {name:string,job:string ,gender:string,country:string,age:number}
  // ngOnInit(){
  //   this.newUserService.OnShowDetailsClicked.subscribe((data:{name:string,job:string ,gender:string,country:string,age:number})=>{
  //       this.newUser=data;
  //   })

  // }
}
