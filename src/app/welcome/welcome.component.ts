import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [` #welcomeBanner {
    margin-top: 60px;
  }`]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
