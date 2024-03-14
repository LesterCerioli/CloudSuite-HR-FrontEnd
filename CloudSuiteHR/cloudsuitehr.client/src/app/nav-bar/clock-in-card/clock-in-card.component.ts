import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-clock-in-card',
  templateUrl: './clock-in-card.component.html',
  styleUrl: './clock-in-card.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ClockInCardComponent {

}
