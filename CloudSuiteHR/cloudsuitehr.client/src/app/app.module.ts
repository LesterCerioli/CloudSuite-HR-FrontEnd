import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SystemOverviewComponent } from './home/system-overview/system-overview.component';
import { HourReviewerComponent } from './hour-reviewer/hour-reviewer.component';

import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { HourDivisionScreenComponent } from './hour-reviewer/hour-division-screen/hour-division-screen.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SystemOverviewComponent,
    HourReviewerComponent,
    HourDivisionScreenComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, MatIconModule,
    MatDialogModule, MatTableModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
