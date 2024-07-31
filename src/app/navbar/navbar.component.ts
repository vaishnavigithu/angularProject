import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @Input() itamName = '';

  

  // eShopping: string='eShopping';
  // searchValue: string = 'Mobile';
  
  course: boolean = false;
  // showPopUp: boolean = false;

  // searchText: string='';
  

  // products =[
  //   {id:1, name:'anologe watch', price:'109', color:'black', available:'available', type:'Free', image:'/assets/Images/Watch.png.jpg'},
  //   {id:2, name:'tshirts', price:'200', color:'red', available:'Not Available', type:'Premium', image:'https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/Custom-Printed-T-Shirt-Round-Neck.jpg'},
  //   {id:3, name:'shoes', price:'500', color:'White', available:'available', type:'Free', image:'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg'},
  //   {id:4, name:'Pants', price:'250', color:'Skin',available:'available', type:'Premium',  image:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'},
  //   {id:5, name:'smartPhone', price:'1200', color:'golden', available:'Not available',type:'Premium', image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80'},
  //   {id:6, name:'Iphone', price:'40000', color:'yellow', available:'available',type:'Subscribe', image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80'}
  // ]

  // closeNotification(){
  //   this.displyNotification=true;
  // }
  // popUp(){
  //   this.showPopUp=true;
  // }

  // getTotalCourses(){
  //   return this.products.length;
  // }

  // getFreeCourses(){
  //   return this.products.filter(product => product.type === 'Free').length;
  // }
  // getPremiumCourses(){
  //   return this.products.filter(product => product.type === 'Premium').length;
  // }
  // getSubscribedCourses(){
  //   return this.products.filter(product => product.type === 'Subscribe').length;
  // }

  // onSearchTextEntered(searchValue: string){
  //   this.searchText= searchValue;
  //   console.log(this.searchText);
  // }
}
