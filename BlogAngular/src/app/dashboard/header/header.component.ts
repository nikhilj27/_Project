import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {

  serverErrorMessages = ''
  username = '';

  constructor(private router: Router, private headerService: HeaderService) { }

  ngOnInit() {

      $('.ui.dropdown').dropdown();

    this.userInfo();
  }

  userInfo(): void {
    this.headerService.getUserName().subscribe(
      (response)=>{
        this.username = response['user'].fullName;
      },(error)=>{
        this.serverErrorMessages = error.error['message'];
      }
    )
  }

  onLoggedOut(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login')
  }

}
