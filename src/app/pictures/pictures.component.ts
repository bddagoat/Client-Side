import { Component, OnInit } from '@angular/core';
import { IArt } from 'src/models/IArt';   
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  searchResults: IArt[] = [];

  notIncluded: string[] = [
    "name",
    "category",
    "monetize",
    "description"
  ];

  picture: string = "";

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  search() {
    return this.http.searchPics(this.picture).then(data => this.searchResults= data);
  }

  getIncluded(title: IArt): string[] {
    return Object.keys(title).filter( (data)=> !this.notIncluded.includes(data) );
  }

}
