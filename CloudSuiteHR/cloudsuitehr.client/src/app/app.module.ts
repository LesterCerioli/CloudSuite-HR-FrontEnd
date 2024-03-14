import { HttpClientModule } from '@angular/common/http';
import { NgModule, ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { MatDatepickerModule } from '@angular/material/datepicker'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SystemOverviewComponent } from './home/system-overview/system-overview.component';
import { CchOverviewComponent } from './cch-overview/cch-overview.component';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClockInCardComponent } from './nav-bar/clock-in-card/clock-in-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SystemOverviewComponent,
    CchOverviewComponent,
    ClockInCardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, MatIconModule,
    MatTableModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatHint, ScrollingModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
