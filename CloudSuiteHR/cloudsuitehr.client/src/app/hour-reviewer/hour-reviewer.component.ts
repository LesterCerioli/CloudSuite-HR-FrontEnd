import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HourDivisionScreenComponent } from './hour-division-screen/hour-division-screen.component';

@Component({
  selector: 'app-hour-reviewer',
  templateUrl: './hour-reviewer.component.html',
  styleUrl: './hour-reviewer.component.css'
})
export class HourReviewerComponent {
  constructor(private dialog: MatDialog){ }

    openDialog(){
      this.dialog.open(HourDivisionScreenComponent);
    }
}
