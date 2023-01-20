import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeJsonComponent } from './fake-json.component';

const routes: Routes = [{ path: '', component: FakeJsonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FakeJsonRoutingModule { }
