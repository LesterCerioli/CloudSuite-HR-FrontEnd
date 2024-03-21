import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SystemOverviewComponent } from './home/system-overview/system-overview.component';
import { HourReviewerComponent } from './hour-reviewer/hour-reviewer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent,
  },{
    path: 'overview',
    component: SystemOverviewComponent
  },{
    path: 'review',
    component: HourReviewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
