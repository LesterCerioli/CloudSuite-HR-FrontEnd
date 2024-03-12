import {Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';

export interface PeriodicElement {
  month: string;
  day: number;
}

//const ELEMENT_DATA: PeriodicElement[] = getList();
// [
//   {month: 1, day: 'Hydrogen'},
//   {month: 2, day: 'Helium'},
//   {month: 3, day: 'Lithium'},
//   {month: 4, day: 'Beryllium'},
//   {month: 5, day: 'Boron'},
//   {month: 6, day: 'Carbon'},
//   {month: 7, day: 'Nitrogen'},
//   {month: 8, day: 'Oxygen'},
//   {month: 9, day: 'Fluorine'},
//   {month: 10, day: 'Neon'},
// ];

function getList(){
  const numDaysInMonth = (y: number, m: number) => new Date(y, m, 0).getDate();

  const formatter = new Intl.DateTimeFormat('pt-br', {month: 'short'});
  const monthName = formatter.format(new Date());
  const numDays = numDaysInMonth(new Date().getFullYear(), new Date().getMonth()+1);
  console.log(numDays);
  let objList = [];

  for (let i = 0; i < numDays; i++){
    objList.push({
      month: monthName,
      day: i + 1
    })
  }
  return objList;
  ;
  //console.log(numDays(new Date().getFullYear(), new Date().getMonth()));
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
