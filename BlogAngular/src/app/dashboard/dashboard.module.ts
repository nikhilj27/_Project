import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from '../auth/guards/http.interceptor';
import { StorylistComponent } from './storylist/storylist.component';
import { StoryComponent } from './storylist/story/story.component';
import { LeftFeedComponent } from './left-feed/left-feed.component';
import { RightFeedComponent } from './right-feed/right-feed.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, StorylistComponent, StoryComponent, LeftFeedComponent, RightFeedComponent, CreateStoryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers :[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ]
})
export class DashboardModule { }
