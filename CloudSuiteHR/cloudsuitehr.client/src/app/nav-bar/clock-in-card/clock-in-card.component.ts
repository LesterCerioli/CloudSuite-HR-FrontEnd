import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClockInApiService } from '../../services/clock-in-api.service';

export interface PeriodicElement {
  in: string;
  out: string;
  total: string;
}

@Component({
  selector: 'app-clock-in-card',
  templateUrl: './clock-in-card.component.html',
  styleUrl: './clock-in-card.component.css',
})

export class ClockInCardComponent {

  constructor(private clockInApiService: ClockInApiService){}

  @Output() visibilityMessage = new EventEmitter<boolean>();
  @Input() visibility: boolean = false;

  dataSource: any[] = [];

  ngOnInit() {
    this.loadAllClocksIns();
  }

  loadAllClocksIns() {
    this.clockInApiService.getAllClockIns().subscribe(
      (data) => {
        this.dataSource = data;
      }
    );
  }

  loadClocksInsByDate(date: string) {
    this.clockInApiService.getClockInsByDate(date).subscribe(
    (data) => {
      this.dataSource = data;
    },
    (error) => {
      console.error('Erro ao carregar dados',error);
    }
    );
  }

  createClockIn(clockInData: any) {
    this.clockInApiService.createClockIn(clockInData).subscribe(
    (response) => {
      console.log('Registro criado com sucesso', response);
      },
    (error) => {
      console.error('Erro ao criar o registro', error);
      }
    );
  }

  
  sendChangeVisibility(){
    this.visibility = !this.visibility;
    this.visibilityMessage.emit(this.visibility);
  }
}
