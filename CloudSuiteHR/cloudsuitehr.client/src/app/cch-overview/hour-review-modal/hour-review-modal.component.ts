import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HourAllocationModalComponent } from './hour-allocation-modal/hour-allocation-modal.component';


export interface Project {
  client: string;
  projectName: string;
}

const ELEMENT_DATA: Project[] = [
  {client: "Lucas Technology Services", projectName: 'projeto 1'},
  {client: "Lucas Technology Services", projectName: 'projeto 2'},
  {client: "Lucas Technology Services", projectName: 'projeto 3'},
];


@Component({
  selector: 'app-hour-review-modal',
  templateUrl: './hour-review-modal.component.html',
  styleUrl: './hour-review-modal.component.css'
})
export class HourReviewModalComponent {
  constructor(private ref: MatDialogRef<HourReviewModalComponent>, private dialog: MatDialog){}

  displayedColumns: string[] = ['client', 'projectName', 'hours', 'operation'];
  dataSource = ELEMENT_DATA;

  closeWindow(){
    this.ref.close();
  }

  openDialog(){
    this.dialog.open(HourAllocationModalComponent);
  }
}
