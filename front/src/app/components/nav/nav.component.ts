import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appcp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  auth = false;

  constructor() { }

  ngOnInit(): void {
    this.isAuth();      
  }

  isAuth(){
    if (!localStorage.session) {
      this.auth = false;
    }
    else {
      this.auth = true;
    } 

  }

}
