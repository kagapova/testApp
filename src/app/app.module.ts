import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {StartPageComponent} from './pages/start-page/start-page.component';
import {TaskModule} from './components/task/task.module';
import {TaskService} from './api/task.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {EditComponent} from './pages/edit/edit.component';
import {CreateComponent} from './pages/create/create.component';
import {TaskInfoService} from './services/task-info.service';


@NgModule({
  declarations: [
    AppComponent,
      StartPageComponent,
      LoginComponent,
      EditComponent,
      CreateComponent
  ],
  imports: [
      TaskModule,
      AppRoutingModule,
    BrowserModule,
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [
      TaskService,
      TaskInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
