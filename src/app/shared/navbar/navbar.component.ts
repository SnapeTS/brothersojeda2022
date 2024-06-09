import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public phoneen: string;

  constructor() { }

  ngOnInit(): void {
    this.phoneen = '6822639028';
  }

}
