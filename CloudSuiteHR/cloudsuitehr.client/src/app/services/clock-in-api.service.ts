import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClockInApiService {

  private apiUrl = 'http://127.0.0.1:3000';
  constructor(private http: HttpClient) { }

  createClockIn(clockInData: any): Observable<any> {
    return this.http.post(this.apiUrl, clockInData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  getAllClockIns(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  getClockInsByDate(date: string): Observable<any> {
    const url = `${this.apiUrl}/date/${date}`;
    return this.http.get(url)
  }

  getClockInsByYear(year: string): Observable<any> {
    const url = `${this.apiUrl}/year/${year}`
    return this.http.get(url)
  }

  getClockInsByMonth(month: string): Observable<any> {
    const url = `${this.apiUrl}/month/${month}`
    return this.http.get(url)
  }

  getClockInsByDay(day: string): Observable<any> {
    const url = `${this.apiUrl}/day/${day}`
    return this.http.get(url)
  }


}
