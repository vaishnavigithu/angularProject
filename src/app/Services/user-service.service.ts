import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  users =[
    {name: 'Vaishanvi', status: 'active'},
    {name:'Devika', status:'inactive'},
    {name:'Aditya', status:'active'}
  ]

  AddNewUser(name: string, status:string){
    this.users.push({name:name, status:status})
  }
}
