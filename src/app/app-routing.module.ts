import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { WorksCenzorComponent } from './pages/works/works-cenzor/works-cenzor.component';
import { WorksUserListComponent } from './pages/works/works-user-list/works-user-list.component';
import { WorksTaskListComponent } from './pages/works/works-task-list/works-task-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent,
    children: [
      { path: 'cenzor', component: WorksCenzorComponent },
      { path: 'userList', component: WorksUserListComponent },
      { path: 'taskList', component: WorksTaskListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
