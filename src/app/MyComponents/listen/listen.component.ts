import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SongData } from '../data';
import {HttpClientModule,HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listen',
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule],
  templateUrl: './listen.component.html',
  styleUrl: './listen.component.css'
})
export class ListenComponent {
  // songs:SongData[] = new SongData();
  totalAngularPackages:String = ""
  constructor(private http: HttpClient) {}
  ngOnInit() {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    this.http.get<any>('http://127.0.0.1:5000/GetDataFromServer',{ 'headers': headers }).subscribe(data => {
      this.totalAngularPackages = data.total;
        console.log(this.totalAngularPackages);
    })
  }
}
