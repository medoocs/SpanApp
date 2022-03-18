import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly personAPIUrl = "http://localhost:5167/api/person/csv";

  constructor(private http:HttpClient) { }

  getPersonCsvList(){
    return this.http.get<any>(this.personAPIUrl);
  }

  addPersonCsv(){
    return this.http.post(this.personAPIUrl, {});
  }
}
