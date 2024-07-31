import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { setBackgroundDirective} from './Directives/customDirectives';
import { StyleDirective } from './Directives/style.directive';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUsersDetailsComponent } from './all-users-details/all-users-details.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    SearchComponent,
    FilterComponent,
    ProductsComponent,
    setBackgroundDirective,
    StyleDirective,
    AngularComponent,
    JavascriptComponent,
    AddUserComponent,
    AllUsersDetailsComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
