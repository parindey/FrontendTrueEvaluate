import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router) { }

  sessionUser : any = sessionStorage.getItem("userId");
  sessionAdmin : any = sessionStorage.getItem("adminId");
  logout() {
   sessionStorage.clear();
   this.router.navigate[('')];
   location.reload();
 }

  ngOnInit() {
  }

}
