import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakeJsonRoutingModule } from './fake-json-routing.module';
import { FakeJsonComponent } from './fake-json.component';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    FakeJsonComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    FakeJsonRoutingModule
  ]
})
export class FakeJsonModule { }
