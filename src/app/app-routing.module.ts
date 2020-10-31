import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PreArrivalComponent } from './pre-arrival/pre-arrival.component';

const routes: Routes = [
  {path:'landing-page',component:LandingPageComponent},
  {path:'',component:LandingPageComponent},
  {path:'preArrival',component:PreArrivalComponent},
  // {path:'preArrival/:subCategory',component:PreArrivalComponent},
  {path:'blogs',component:BlogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
