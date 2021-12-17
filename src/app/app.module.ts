import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorisationErrorComponent } from './Shared/authorisation-error/authorisation-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebappModule } from './UserLandingPage/webapp.module';
import { ListViewComponent } from './user-home/list-view/list-view.component';
import { SingleViewComponent } from './user-home/single-view/single-view.component';
// import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AuthorisationErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    WebappModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
