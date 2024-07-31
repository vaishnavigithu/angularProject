import { Component } from '@angular/core';
import { EnrollService } from '../Services/services';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers:[EnrollService]
})
export class JavascriptComponent {
  title = 'Javascript';

  constructor(private enrollService:EnrollService){

  }
  onEnrollClick(){
    // const enrollService = new EnrollService();
     this.enrollService.onEnrollClicked(this.title);
  }

}
