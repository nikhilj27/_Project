import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  {
    path: 'header',
    component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create/story', component: CreateStoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
