import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppMainComponent} from './../../layout/app-main/app-main.component';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
    public items: MenuItem[] = [];

    constructor(public appMain: AppMainComponent) {}

    ngOnInit() {}
}
