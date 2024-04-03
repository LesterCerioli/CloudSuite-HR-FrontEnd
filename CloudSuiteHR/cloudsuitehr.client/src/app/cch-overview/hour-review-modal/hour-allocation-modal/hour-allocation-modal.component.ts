import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface Role {
  name: string;
  required: boolean
}

const ELEMENT_DATA: Role[] = [
  {name: "Alocação em Projeto", required: false},
  {name: "Testes Unitários de Software", required: false},
  {name: "Devops", required: false},
  {name: "Segurança", required: false},
  {name: "Alinhamento técnico", required: false},
  {name: "Daily", required: true},
  {name: "Reuniões com cliente", required: false},

];


@Component({
  selector: 'app-hour-allocation-modal',
  templateUrl: './hour-allocation-modal.component.html',
  styleUrl: './hour-allocation-modal.component.css'
})
export class HourAllocationModalComponent {
  constructor(private ref: MatDialogRef<HourAllocationModalComponent>){}

  displayedColumns: string[] = ['name', 'hoursAllocated'];
  dataSource = ELEMENT_DATA;

  closeWindow(){
    this.ref.close();
  }

}
