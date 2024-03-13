import {Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';

export interface PeriodicElement {
  month: string;
  day: number;
  isWeekend?: boolean;
  isToday?: boolean;
}

function getList(){
  const numDaysInMonth = (y: number, m: number) => new Date(y, m, 0).getDate();

  const formatter = new Intl.DateTimeFormat('pt-br', {month: 'short'});
  const monthName = formatter.format(new Date());
  const numDays = numDaysInMonth(new Date().getFullYear(), new Date().getMonth()+1);

  let objList = [];
  for (let i = 0; i < numDays; i++){
    let obj = {month: "", day: 0, isWeekend: false, isToday: false}
    obj.month = monthName;
    obj.day = i + 1;

    if(i + 1 === new Date().getDate()){
      obj.isToday = true;
    }
    objList.push(obj);
  }
  return objList;
  ;
}

@Component({
  selector: 'app-cch-overview',
  templateUrl: './cch-overview.component.html',
  styleUrl: './cch-overview.component.css',
  providers: [provideNativeDateAdapter()],
})
export class CchOverviewComponent {
  displayedColumns: string[] = ['month', 'day', 'hour_in', 'hour_lunch', 'lunch_return', 'other_out', 'return', 'hour_out', 'total_hours'];
  dataSource = getList();
}
