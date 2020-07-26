import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/todo/todo-list/list.component';
import { ManageListComponent } from './components/todo/todo-manage-list/manage-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'manage-list',
    component: ManageListComponent
  },
  {
    path: 'manage-list/:id',
    component: ManageListComponent
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
