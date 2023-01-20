import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ShareModule} from './../../share/share/share.module';

import {SettingRoutingModule} from './setting-routing.module';
import {SettingComponent} from './setting.component';

@NgModule({
    declarations: [SettingComponent],
    imports: [CommonModule, SettingRoutingModule, ShareModule]
})
export class SettingModule {}
