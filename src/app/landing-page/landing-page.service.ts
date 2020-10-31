import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private httpClient:HttpClient) { }

  public getBlog(){
   
    return this.httpClient.get('http://localhost:3000/app/');
  }
}
