import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
})

export interface Date {
  month: string;
  day: number;
  isWeekend?: boolean;
  isToday?: boolean;
}

export class DateProviderService{

  constructor() { }

  formatTimeStampNow(){
    //Aqui vamos pegar a data do dia informado pela api e formatar para uma tag de acordo com o modelo
    const date = new Date();
    const formatterDate = new Intl.DateTimeFormat('pt-br', { day:'2-digit', month:'2-digit', year:'numeric'})
    const formatterHour = new Intl.DateTimeFormat('pt-br', { hour: 'numeric', minute:'numeric'});
    const dateToday = formatterDate.format(date);
    const hourNow = formatterHour.format(date);

    return `${dateToday}\xa0\xa0\xa0${hourNow}`;
  }

  generateMonthList(){
    //gerando dinamicamente a lista de horarios do mes atual de acordo com a data fornecida pelo sistema
    const numDaysInMonth = (y: number, m: number) => new Date(y, m, 0).getDate();

    const formatter = new Intl.DateTimeFormat('pt-BR', {month: 'short'});
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
}
