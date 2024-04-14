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
import { MatCardModule } from '@angular/material/card';
import { HourReviewModalComponent } from './cch-overview/hour-review-modal/hour-review-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HourAllocationModalComponent } from './cch-overview/hour-review-modal/hour-allocation-modal/hour-allocation-modal.component';
import { ManagementComponent } from './home/system-overview/management/management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SystemOverviewComponent,
    CchOverviewComponent,
    ClockInCardComponent,
    HourReviewModalComponent,
    HourAllocationModalComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, MatIconModule,
    MatTableModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatHint, ScrollingModule,
    MatCardModule, MatDialogModule, FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
