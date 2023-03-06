import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private acctSvc:AccountService) { }

  logout(){
    this.acctSvc.logout();
  }

  ngOnInit(): void {
  }

}
