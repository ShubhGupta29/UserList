import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorisationErrorComponent } from './Shared/authorisation-error/authorisation-error.component';

const routes: Routes = [
  {path:'error',component:AuthorisationErrorComponent},
  {path:'',redirectTo:'/webapp/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
