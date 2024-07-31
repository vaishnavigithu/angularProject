import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    // selector : '[setBackground]'
    selector:'[appHighLight]'
})
// export class setBackgroundDirective implements OnInit{
  export class setBackgroundDirective {
   constructor(private element : ElementRef, private renderer : Renderer2){
    //   element.nativeElement.style.backgroundColor ='#C8E6C9';
    // this.element=element;
   }
//    ngOnInit(){
//     //  this.element.nativeElement.style.backgroundColor ='#C8E6C9';
//     this.renderer.setStyle(this.element.nativeElement, 'backgroundColor','red');
//     this.renderer.addClass(this.element.nativeElement,'addCLass');
//     this.renderer.setAttribute(this.element.nativeElement, 'title','We both have so much bonding in very less time')
//    }

  // @HostListener('mouseenter')  onMouseOver(){
  //   this.renderer.setStyle(this.element.nativeElement,'margin','10px 20px');
  //   this.renderer.setStyle(this.element.nativeElement,'padding','30px 30px');
  //   this.renderer.setStyle(this.element.nativeElement,'transition','0.5');
  //   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#C2E6C7');
  // }
  // @HostListener('mouseleave')  onMouseOut(){
  //   this.renderer.setStyle(this.element.nativeElement,'margin','5px 10px');
  //   this.renderer.setStyle(this.element.nativeElement,'padding','10px 5px');
  //   this.renderer.setStyle(this.element.nativeElement,'transition','0.5');
  //   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  // }

  @HostBinding('style.backgroundColor') background : string ='tranparent';
  @HostBinding('style.border') border : string = 'none';
  @HostBinding('style.padding') padding: string = 'none';

  @HostListener('mouseenter') onMouseOver(){
    this.background = 'pink';
    this.border = '5px solid yellow';
    this.padding= '10px'
  }
  @HostListener('mouseleave') onMouseOut(){
    this.background='transparent';
    this.border = 'none';
    this.padding='none';
  }
}