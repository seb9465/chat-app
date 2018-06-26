import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  @Input()
  myCallback: Function;

  constructor() { }

  ngOnInit() {
    console.log(this.myCallback);
  }
}
