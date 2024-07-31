import { Component } from '@angular/core';

// @Directive({
//   selector : '[setBackGround]'
// })

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  // constructor(element: ElementRef){
  //    element.nativeElement.style.backgroundColor = 'green';

  // }
  destroy: boolean =true;

  onDestroy(){
    this.destroy=false;
  }

}
