import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


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
  constructor(private ref: MatDialogRef<HourReviewModalComponent>){}

  displayedColumns: string[] = ['client', 'projectName', 'hours', 'operation'];
  dataSource = ELEMENT_DATA;

  closeWindow(){
    this.ref.close();
  }
}
