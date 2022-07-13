import { Component, OnInit } from '@angular/core';
import { IArt } from 'src/models/IArt';   
import { HttpService } from '../http.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  searchResults: IArt[] = [];

  notIncluded: string[] = [
    "name",
    "category",
    "monetize",
    "description"
  ];

  video: string = "";

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  search() {
    return this.http.searchVids(this.video).then(data => this.searchResults= data);
  }

  getIncluded(title: IArt): string[] {
    return Object.keys(title).filter( (data)=> !this.notIncluded.includes(data) );
  }

}
