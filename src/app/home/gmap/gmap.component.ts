import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {

  public phone: string;
  public phoneen: string;
  public address: string;
  public zip: number;

  constructor() { }

  ngOnInit(): void {

    this.phone = '6024037466';
    this.phoneen = '6822639028';
    this.address = 'Hurst, TX';
    this.zip = 76053;
  }

}
