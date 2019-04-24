import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lastUpdate:Date
  constructor() {
    this.lastUpdate=new Date();
   }

  ngOnInit() {
  }

}
