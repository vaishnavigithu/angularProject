import { EventEmitter } from "@angular/core"

export class newUserService{
    newUsers=[
        {name:'vaish',job:'Engineer',gender:'female',country:'india',age:24},
        {name:'om',job:'doctor',gender:'male',country:'Bharat',age:19},
        {name:'Vaibhu',job:'IT Er',gender:'female',country:'india',age:17},
        {name:'Divya',job:'E&tc ER',gender:'female',country:'INR',age:27},
    ]

    OnShowDetailsClicked = new EventEmitter<{name:string,job:string ,gender:string,country:string,age:number}>
    showUserDetails(newUser: {name:string,job:string ,gender:string,country:string,age:number}){
        this.OnShowDetailsClicked.emit(newUser);
    }
}