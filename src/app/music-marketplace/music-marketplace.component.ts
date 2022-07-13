import { Component, OnInit } from '@angular/core';
import { IArt } from 'src/models/IArt';   
import { HttpService } from '../http.service';

@Component({
  selector: 'app-music-marketplace',
  templateUrl: './music-marketplace.component.html',
  styleUrls: ['./music-marketplace.component.css']
})
export class MusicMarketplaceComponent implements OnInit {

  searchResults: IArt[] = [];

  notIncluded: string[] = [
    "name",
    "category",
    "monetize",
    "description"
  ];

  music: string = "";

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  search() {
    return this.http.searchMusic(this.music).then(data => this.searchResults= data);
  }

  getIncluded(title: IArt): string[] {
    return Object.keys(title).filter( (data)=> !this.notIncluded.includes(data) );
  }

}
