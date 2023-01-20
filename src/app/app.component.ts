import {AppConfig} from './api/appconfig';
import {ConfigService} from './../services/app.config.service';
import {Component} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'DashBoard';
    public menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig, private configService: ConfigService) {}

    ngOnInit() {
        console.log('AppComponent.ngOnInit');
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';

        const config: AppConfig = {
            theme: 'saga-green',
            dark: true,
            inputStyle: 'outlined',
            ripple: true
        };
        this.configService.updateConfig(config);
    }
}

// ng generate module login --route login  --module app.module

// ng generate module app-topBar --route app-topBar  --module app.module

// ng generate module pages/dashBoard --route pages/dashBoard --module layout/app-main/app-main.module

// ng generate module pages/setting --route pages/setting --module layout/app-main/app-main.module
