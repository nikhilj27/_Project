import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CreateStoryService } from './create-story.service';
import * as moment from 'moment';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit {
  storyForm: FormGroup;
  successMessage = false;
  serverErrorMessages = '';
  tags = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private formBuilder: FormBuilder,
    private createStoryService: CreateStoryService
  ) {
    this.storyForm = this.formBuilder.group({
      title: [''],
      description: [''],
      date: [''],
      tags: []
    });
  }

  ngOnInit() {}

  newStory(): void {
    this.storyForm.value['userId'] = this.createStoryService.getUserInfo()._id;
    this.storyForm.value[
      'postby'
    ] = this.createStoryService.getUserInfo().fullName;
    this.storyForm.value['date'] = moment(new Date()).format('LL');
    this.storyForm.value['tags'] = this.tags;

    this.createStoryService.postStory(this.storyForm.value).subscribe(
      response => {
        if (response.status === 200) {
          this.successMessage = true;
          setTimeout(() => {
            this.successMessage = false;
          }, 5000);
        }
      },
      error => {
        this.serverErrorMessages = error.error['message'];
      }
    );
  }

   add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    console.log(this.tags)
  }

  remove(rtag): void {
    const index = this.tags.indexOf(rtag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    console.log(this.tags);
  }
}
