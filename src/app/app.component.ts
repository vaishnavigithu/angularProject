import { Component  , ElementRef, OnInit, ViewChild, ViewEncapsulation,AfterViewInit} from '@angular/core';
import { UserServiceService } from './Services/user-service.service';
import { newUserService } from './Services/newUser.service';
import { Observable } from 'rxjs';
import { FormGroup,FormControl,FormBuilder ,Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserServiceService,newUserService]
  // encapsulation: ViewEncapsulation.None
  
})
export class AppComponent implements OnInit{
  // @ViewChild('inputRef') inputElement = ElementRef;
  @ViewChild('inputRef') inputElement!: ElementRef;
  // myName : string= '';
  // isDisplayPara = false;
  // showDiv = true;

  // users:{name: string,status:string}[]=[];
  
  // newUser: {name:string,job:string ,gender:string,country:string,age:number}[]=[];
  // event: any;
  data : string = "";
  text = '';
  value = "";
  lastKeyPressed : string ='';
  isActive = false;
  inputText : string = '';
  currentName = 'vaishnavi_Pawar'
  reactiveForm : FormGroup;
  nameValue = ""
  name = "";
  surname  = "";
  empID = "";
  companyName = "";
  emailId = "";
  mandatoryFiledsArray = ['name','surname','companyName','emailId'];
  isMandatory : boolean = false;
  currentDate: string;
  selectedDate : Date;
  
  constructor(private userServiceService: UserServiceService, private newUserService:newUserService,private formbuilder : FormBuilder, private datePipe : DatePipe){

  }
  
  // toggleButton(): void {
  //   this.isActive = !this.isActive;
  // }
  // header = ["yeahhh Everything will be all right"]

  // clickMe($event : any){
  //   console.log("button is clicked with msg",$event);
  // }
  // gfg(event : any) { 
  //   console.log(event.target.value); 
  // } 
  // gfg(x: any){
  //  this.text = x.target.value + '|';
  // }
  // onEnter(): void {
  //   console.log("Entered key is pressed");
  // }
  // onInputChange(inputValue : any){
  //   this.value = inputValue;
  // }
  // oninput(inputValue : any){
  //   this.value = inputValue;
  // }
  // onKeyUp(event : KeyboardEvent){
  //   console.log("on key up",event.key);
  // }
  // onKeyDown(event : KeyboardEvent){
  //   this.lastKeyPressed = event.key;
  //  console.log("Key is downed");
  // }
  // onchange(inputVal:any){
  //   console.log("onchnage is happened on the input" , inputVal)
  // }
  // onFocus(){
  //   console.log("the curser is on the input");
  // }
  // onBlur(){
  //   console.log("onblur");
  // }
  // ngAfterViewInit() {
  //   console.log(this.inputElement); // Logs the ElementRef instance
  // }
  // focusInput(){
  //   if(this.inputElement){
  //     this.inputElement.nativeElement.focus();
  //   }
    
  // }
  // setInputValue(value: string): void {
  //   console.log('Value received:', value);
  //   if (this.inputElement) {
  //     this.inputElement.nativeElement.value = value;
  //     console.log('Value after setting:', this.inputElement.nativeElement.value);
  //   }
  // }



  // onInputClick(event : any){
  //   console.log(event.toElement.value);

  // }

  // myObservable = new Observable((observer) =>{
  //   console.log('Observer Starts');
  //   setTimeout(()=>{ observer.next("1")}, 1000);
  //   setTimeout(()=>{ observer.next("2")}, 3000);
  //   // setTimeout(()=>{ observer.error(new Error("something went wrong Please try again later"))}, 5000);
  //   setTimeout(()=>{ observer.next("4")}, 7000);
  //   setTimeout(()=>{ observer.complete()}, 8000);
  // })

  ngOnInit(){
    // this.myObservable.subscribe((val)=>{
    //   console.log(val);
    //   }, (error)=>{
    //     alert(error.message);

    //   }, ()=>{
    //     alert ('Observables are completed');
    //   }
    // )
    //  this.users = this.userServiceService.users;
    //  this.newUser=this.newUserService.newUsers;

  // }
  // hideDiv(){
  //   this.showDiv = false;
  // }
  // filterData(event : any){
  //   var data = event.target.value;
  //   console.log(data);

  this.reactiveForm = new FormGroup({
    name : new FormControl('vaishnavii'),
    email : new FormControl(null),
    message : new FormControl(null)

  })

  }
  onNameChange(){

  }
  
  onSubmit(){
   
  }

  // onchange(){
  //   this.isDisplayPara = true;

  // }
  // title = 'myFirstAngularApp';

  // ocupation : string ='Lawyer';

  // active : boolean =false;
  // display : boolean=false;

  // showNotice(){
  //   this.display=true;
  // }
  // closeNotice(){
  //   this.display=false;
  // }

  onSubmitForm(form : FormGroup){
    console.log(this.reactiveForm);
    console.log(form.value.name);
    console.log(form.value.email);
  }
}
