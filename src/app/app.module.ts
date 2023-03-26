import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RoomComponent } from './pages/room/room.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDividerModule} from "@angular/material/divider";
import { MatSqButtonComponent } from './mat-sq-button/mat-sq-button.component';
import { HelpComponent } from './help/help.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TaskComponent,
    TaskListComponent,
    PageNotFoundComponent,
    RoomComponent,
    MatSqButtonComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
