
import { Component , EventEmitter, NgModule, Output, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})


export class SearchComponent {
  name: string='';
  Welcome: string ='Welcome to my First Angular Application';

  

 //property :bind this property to the input by 2 way data binding
  enterSearchValue: string='';
 //


  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();   //created custom event 

  //and to use this we have to raise the event creted a method onSearchTextChanged()

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue)
  }


}
