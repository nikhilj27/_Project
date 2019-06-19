import { Component, OnInit } from '@angular/core';
import { StorylistService } from './storylist.service';
import { Story } from './story.model';

@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrls: ['./storylist.component.scss'],
  providers: [StorylistService]
})
export class StorylistComponent implements OnInit {

  storyList: Array<Story>;

  constructor(private storyListService: StorylistService) {}

  ngOnInit() {
    this.stories();
  }

  stories(){
    this.storyListService.storyList().subscribe(
      (response)=>{
        this.storyList = response as Array<Story>;
      }
    )
  }

}
