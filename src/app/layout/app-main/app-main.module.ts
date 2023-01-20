import {MenuitemComponent} from './../../component/menuitem/menuitem.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {ConfigService} from './../../../services/app.config.service';
import {MenuService} from './../../../services/app.menu.service';
import {AppHeaderComponent} from './../../component/app-header/app-header.component';
import {MenuComponent} from './../../component/menu/menu.component';
import {AppMainRoutingModule} from './app-main-routing.module';
import {AppMainComponent} from './app-main.component';

@NgModule({
    declarations: [AppMainComponent, AppHeaderComponent, MenuComponent, MenuitemComponent],
    imports: [CommonModule, AppMainRoutingModule, MenuModule],
    providers: [ConfigService, MenuService]
})
export class AppMainModule {}
