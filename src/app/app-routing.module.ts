import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'usdetails',component:UserdetailsComponent},
  {path:'',redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
