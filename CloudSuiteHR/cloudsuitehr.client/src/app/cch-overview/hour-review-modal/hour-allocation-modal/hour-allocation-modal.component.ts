import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface Role {
  name: string;
}

const ELEMENT_DATA: Role[] = [
  {name: "Alocação em Projeto"},
  {name: "Testes Unitários de Software"},
  {name: "Devops"},
  {name: "Segurança"},
  {name: "Alinhamento técnico"},
  {name: "Daily"},
  {name: "Reuniões com cliente"},

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
