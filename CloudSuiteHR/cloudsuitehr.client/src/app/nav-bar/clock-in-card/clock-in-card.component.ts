import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

export interface PeriodicElement {
  in: string;
  out: string;
  total: string;
}


@Component({
  selector: 'app-clock-in-card',
  templateUrl: './clock-in-card.component.html',
  styleUrl: './clock-in-card.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ClockInCardComponent {
  displayedColumns: string[] = ['check_in', 'check_out', 'sub_total'];
  dataSource = [{in: "09:00", out: "12:05", total: "03:05"},{in: "13:01", out: "17:05", total: "XX:XX"}];
}
