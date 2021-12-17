import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ListViewComponent } from '../user-home/list-view/list-view.component';
import { SingleViewComponent } from '../user-home/single-view/single-view.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { LoginPageComponentComponent } from './user-landing-component/login-page-component/login-page-component.component';
import { RegisterComponent } from './user-landing-component/register/register.component';
import { UserLandingComponentComponent } from './user-landing-component/user-landing-component.component';

const routes: Routes = [
  {path: 'webapp', component:UserLandingComponentComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginPageComponentComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  { path: 'home', component: UserHomeComponent, canActivate: [AuthGuard], children: [
    {path:'', redirectTo: 'listview', pathMatch:'full'},
    {path: 'listview', component: ListViewComponent},
    {path: 'singleview', component: SingleViewComponent}
  ]
  },
  {path: '', redirectTo: 'webapp', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebappRoutingModule { }
