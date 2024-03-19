import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DateProviderService } from '../services/date-service/date-provider.service';

@Component({
  selector: 'app-cch-overview',
  templateUrl: './cch-overview.component.html',
  styleUrl: './cch-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter(), DateProviderService],
})
export class CchOverviewComponent {

  constructor(private service: DateProviderService){}

  callDateService(){
    return this.service.generateMonthList();
  }

  displayedColumns: string[] = ['month', 'day', 'hour_in', 'hour_lunch', 'lunch_return', 'other_out', 'return', 'hour_out', 'total_hours'];
  dataSource = this.callDateService();
}
