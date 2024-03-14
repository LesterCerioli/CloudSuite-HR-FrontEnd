import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SystemOverviewComponent } from './home/system-overview/system-overview.component';
import { CchOverviewComponent } from './cch-overview/cch-overview.component';
import { ClockInCardComponent } from './nav-bar/clock-in-card/clock-in-card.component';

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
    path: 'overview/cch',
    component: CchOverviewComponent
  },{
    path: 'card',
    component: ClockInCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
