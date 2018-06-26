import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('sidenav')
    sidenav: MatSidenav ;

    public _callbackFunction: Function;

    constructor() {

    }

    ngOnInit() {
        this._callbackFunction = this.toggleSideMenu.bind(this);
    }

    private toggleSideMenu() {
        this.sidenav.toggle();
    }
}
