import { Injectable } from '@angular/core';
import { CreateStory } from './create-story.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateStoryService {

  constructor(private httpClient: HttpClient) { }

  postStory(story: CreateStory):Observable<any>{
    return this.httpClient.post(environment.apiBaseUrl + '/newstory', story);
  }

  getUserInfo(){
    return {
      _id: localStorage.getItem('_id'),
      fullName: localStorage.getItem('fullName'),
      email: localStorage.getItem('email')
    }
  }
}
