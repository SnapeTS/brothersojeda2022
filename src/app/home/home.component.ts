import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public phoneen: string;

  constructor() { }

  ngOnInit(): void {
    this.phoneen = '6822639028';
  }

}
