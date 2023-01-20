import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageDoorsComponent } from './manage-doors.component';

const routes: Routes = [{ path: '', component: ManageDoorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageDoorsRoutingModule { }
