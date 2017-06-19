import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Your Cookbook Online';
  isIn = false;

  constructor() { }

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  ngOnInit() {
  }

}
