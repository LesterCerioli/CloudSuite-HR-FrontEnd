import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DateProviderService } from '../services/date-service/date-provider.service';
import { MatDialog } from '@angular/material/dialog';
import { HourReviewModalComponent } from './hour-review-modal/hour-review-modal.component';

@Component({
  selector: 'app-cch-overview',
  templateUrl: './cch-overview.component.html',
  styleUrl: './cch-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter(), DateProviderService],
})
export class CchOverviewComponent {

  constructor(private service: DateProviderService, private dialog: MatDialog){}

  callDateService(){
    return this.service.generateMonthList();
  }

  openDialog(){
    this.dialog.open(HourReviewModalComponent);
  }

  displayedColumns: string[] = ['month', 'day', 'hour_in', 'hour_lunch', 'lunch_return', 'other_out', 'return', 'hour_out', 'total_hours'];
  dataSource = this.callDateService();
}
