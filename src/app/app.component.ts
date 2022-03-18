import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'SpanApp';

  displayedColumns: string[] = ['name', 'lastName', 'postalCode', 'city', 'number'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    
  }

  loadCsv() {
    this.api.getPersonCsvList()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error:()=>{
        alert("Error while loading data!")
      }
    })
  }

  saveData() {
    this.api.addPersonCsv()
    .subscribe({
      next:(res)=>{
        alert("CSV added successfully!")
      },
      error:()=>{
        alert("Error while saving data!")
      }
    })
    window.location.reload();
  }
}
