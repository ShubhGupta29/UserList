import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../Shared/Modules/app-material/app-material.module';
// import { NgbModule } from '@ng';

import { WebappRoutingModule } from './webapp-routing.module';
import { UserLandingComponentComponent } from './user-landing-component/user-landing-component.component';
import { LoginPageComponentComponent } from './user-landing-component/login-page-component/login-page-component.component';
import { RegisterComponent } from './user-landing-component/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageService } from './user-landing-component/login-page-component/login-page.service';
import { RegisterService } from './user-landing-component/register/register.service';
import { UserHomeService } from '../user-home/user-home.service';
import { ListViewComponent } from '../user-home/list-view/list-view.component';
import { SingleViewComponent } from '../user-home/single-view/single-view.component';
import { UserHomeComponent } from '../user-home/user-home.component';

// import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [UserLandingComponentComponent, LoginPageComponentComponent, RegisterComponent,    ListViewComponent,
    SingleViewComponent,UserHomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    WebappRoutingModule,
    AppMaterialModule
  ],
  providers: [
    LoginPageService,
    RegisterService,
    UserHomeService
  ],
  bootstrap:[]
})
export class WebappModule { }
