import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { WorksCenzorComponent } from './pages/works/works-cenzor/works-cenzor.component';
import { WorksUserListComponent } from './pages/works/works-user-list/works-user-list.component';
import { WorksTaskListComponent } from './pages/works/works-task-list/works-task-list.component';
import { ButtonDetailsComponent } from './components/button-details/button-details.component';
import { ChildComponent } from './pages/works/works-task-list/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    WorksCenzorComponent,
    WorksUserListComponent,
    WorksTaskListComponent,
    ButtonDetailsComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
