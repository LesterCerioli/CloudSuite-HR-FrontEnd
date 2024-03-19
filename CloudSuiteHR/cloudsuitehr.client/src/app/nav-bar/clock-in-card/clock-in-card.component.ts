import { Component, Input, Output, EventEmitter } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DateProviderService } from '../../services/date-service/date-provider.service';

export interface PeriodicElement {
  in: string;
  out: string;
  total: string;
}

@Component({
  selector: 'app-clock-in-card',
  templateUrl: './clock-in-card.component.html',
  styleUrl: './clock-in-card.component.css',
  providers: [provideNativeDateAdapter(), DateProviderService],
})
export class ClockInCardComponent {

  constructor(private service: DateProviderService){}

  @Output() visibilityMessage = new EventEmitter<boolean>();
  @Input() visibility: boolean = false;
  timeStamp = this.service.formatTimeStampNow();

  displayedColumns: string[] = ['check_in', 'check_out', 'sub_total'];
  dataSource = [{in: "09:00", out: "12:05", total: "03:05"},{in: "13:01", out: "17:05", total: "XX:XX"}];

  sendChangeVisibility(){
    this.visibility = !this.visibility;
    this.visibilityMessage.emit(this.visibility);
  }
}
