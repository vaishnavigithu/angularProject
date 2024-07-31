import { Component } from '@angular/core';
import { EnrollService } from '../Services/services';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers: [EnrollService]
})
export class AngularComponent {
  title='angular';

  constructor(private enrollService:EnrollService){

  }

  onEnrollClick(){
    // const enrollService= new EnrollService();  this is not good practice
    this.enrollService.onEnrollClicked(this.title);
  }

}
