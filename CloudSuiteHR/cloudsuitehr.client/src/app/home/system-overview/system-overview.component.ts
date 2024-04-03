import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ManagementComponent } from './management/management.component';

@Component({
  selector: 'app-system-overview',
  templateUrl: './system-overview.component.html',
  styleUrl: './system-overview.component.css'
})
export class SystemOverviewComponent {
  protected role = true;
  constructor(private dialog: MatDialog){}

  public operations = [
    {operationName : 'Metodologia', icon: 'hub'},
    {operationName : 'GLPI', icon: 'support_agent'},
    {operationName : 'E-mail', icon: 'mail'},
    {operationName : 'Lista de Ramais', icon: 'call_log'},
    {operationName : 'Temporário', icon: 'pending_actions'},
    {operationName : 'Mantis', icon: 'bug_report'},
    {operationName : 'CRM', icon: 'extension'},
    {operationName : 'Recrutamento', icon: 'group_add'}
  ]


  openDialog(){
    this.dialog.open(ManagementComponent);
  }

}
