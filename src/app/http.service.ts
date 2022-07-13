import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArtist } from 'src/models/IArtist';
import { IBusiness } from 'src/models/IBusiness';
import { IProspect } from 'src/models/IProspect';
import { IArt } from 'src/models/IArt';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  apiHost: string = "http://127.0.0.1:5000/";
  url: string = "searchbyname";
  url1: string = "prospect";
  url2: string = "create-profile";
  url3: string = "artists";
  url4: string = "specialists";
  url5: string = "submitart";
  url6: string = "pictures";
  url7: string = "videos";
  url8: string = "music";
  url9: string = "artistaccount"

  constructor(private http: HttpClient) { 

   }

  async searchByBusinessName(name: string): Promise<IBusiness[]> {
    return this.http.get<IBusiness[]>(this.apiHost+this.url+"/"+name).toPromise();
  }

  async searchByName(name: string): Promise<IProspect[]> {
    return this.http.get<IProspect[]>(this.apiHost+this.url1+"/"+name).toPromise();
  }

  async searchByArtist(name: string): Promise<IArtist[]> {
    return this.http.get<IArtist[]>(this.apiHost+this.url9+"/"+name).toPromise();
  }

  async searchPics(picture: string): Promise<IArt[]> {
    return this.http.get<IArt[]>(this.apiHost+this.url6+"/"+picture).toPromise();
  }

  async searchVids(video: string): Promise<IArt[]> {
    return this.http.get<IArt[]>(this.apiHost+this.url7+"/"+video).toPromise();
  }

  async searchMusic(music: string): Promise<IArt[]> {
    return this.http.get<IArt[]>(this.apiHost+this.url+"/"+music).toPromise();
  }

  async submitBusiness(business: IBusiness): Promise<IBusiness[]> {
    return this.http.post<IBusiness[]>(this.apiHost+this.url2, business).toPromise();
  }

  async submitArtist(artist: IArtist): Promise<IArtist[]> {
    return this.http.post<IArtist[]>(this.apiHost+this.url3, artist).toPromise();
  }

  async submitProspect(prospect: IProspect): Promise<IProspect[]> {
    return this.http.post<IProspect[]>(this.apiHost+this.url4, prospect).toPromise();
  }

  async submitArt(media: IArt): Promise<IArt[]> {
    return this.http.post<IArt[]>(this.apiHost+this.url5, media).toPromise();
  }

}
