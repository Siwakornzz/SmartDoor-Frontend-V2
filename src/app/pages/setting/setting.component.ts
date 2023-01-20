import {AppConfig} from './../../api/appconfig';
import {THEM_LISTS, ConfigService} from './../../../services/app.config.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    public themList = [
        {
            name: 'arya-blue',
            colorHex: '#64B5F6',
            color: ''
        },
        {
            name: 'arya-green',
            colorHex: '#81C784',
            color: ''
        },
        {
            name: 'arya-orange',
            colorHex: '#FFD54F'
        },

        {
            name: 'arya-purple',
            colorHex: '#BA68C8',
            color: ''
        },
        {
            name: 'bootstrap4-dark-blue',
            colorHex: '#8dd0ff',
            color: ''
        },
        {
            name: 'bootstrap4-dark-purple',
            colorHex: '#c298d8',
            color: ''
        },
        {
            name: 'bootstrap4-light-blue',
            colorHex: '#007bff',
            color: ''
        },
        {
            name: 'bootstrap4-light-purple',
            colorHex: '#883cae',
            color: ''
        },
        {
            name: 'fluent-light',
            colorHex: '#0078d4',
            color: ''
        },
        {
            name: 'lara-dark-blue',
            colorHex: '#93C5FD',
            color: ''
        },
        {
            name: 'lara-dark-indigo',
            colorHex: '#A5B4FC',
            color: ''
        },
        {
            name: 'lara-dark-purple',
            colorHex: '#C4B5FD',
            color: ''
        },
        {
            name: 'lara-dark-teal',
            colorHex: '#5EEAD4',
            color: ''
        },
        {
            name: 'lara-light-blue',
            colorHex: '#3B82F6',
            color: ''
        },
        {
            name: 'lara-light-indigo',
            colorHex: '#6366F1',
            color: ''
        },
        {
            name: 'lara-light-purple',
            colorHex: '#8B5CF6',
            color: ''
        },
        {
            name: 'lara-light-teal',
            colorHex: '#14B8A6'
        },

        {
            name: 'mdc-dark-deeppurple',
            colorHex: '#CE93D8'
        },

        {
            name: 'mdc-dark-indigo',
            colorHex: '#673AB7',
            color: ''
        },
        {
            name: 'mdc-light-indigo',
            colorHex: '#3F51B5',
            color: ''
        },
        {
            name: 'md-dark-deeppurple',
            colorHex: '#CE93D8',
            color: ''
        },
        {
            name: 'md-light-deeppurple',
            colorHex: '#673AB7'
        },

        {
            name: 'md-light-indigo',
            colorHex: '#3F51B5',
            color: ''
        },
        {
            name: 'md-dark-indigo',
            colorHex: '#9FA8DA',
            color: ''
        },
        {
            name: 'saga-blue',
            colorHex: '#2196F3'
        },

        {
            name: 'saga-green',
            colorHex: '#4CAF50'
        },

        {
            name: 'saga-orange',
            colorHex: '#FFC107'
        },

        {
            name: 'saga-purple',
            colorHex: '#9C27B0'
        },

        {
            name: 'tailwind-light',
            colorHex: '#4F46E5'
        },

        {
            name: 'vela-blue',
            colorHex: '#64B5F6',
            color: ''
        },
        {
            name: 'vela-green',
            colorHex: '#81C784'
        },

        {
            name: 'vela-orange',
            colorHex: '#FFD54F'
        },

        {
            name: 'vela-purple',
            colorHex: '#BA68C8'
        },

        {
            name: 'mdc-light-deeppurple',
            colorHex: '#CE93D8'
        }
    ];
    public ngThemList: any = null;

    constructor(private configService: ConfigService) {}

    ngOnInit() {
        this.themList.forEach((item) => {
            item.color = item.colorHex.replace('#', '');
        });
    }

    ngThemListChange() {
        console.log(this.ngThemList.name);
        this.configService.changeTheme(this.ngThemList.name);
    }
}
