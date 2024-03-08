import { Component } from '@angular/core';

@Component({
  selector: 'app-system-overview',
  templateUrl: './system-overview.component.html',
  styleUrl: './system-overview.component.css'
})
export class SystemOverviewComponent {
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
}
