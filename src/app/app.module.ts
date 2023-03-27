import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {TaskComponent} from './task/task.component';
import {TaskListComponent} from './task-list/task-list.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {RoomComponent} from './pages/room/room.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatDividerModule} from "@angular/material/divider";
import {MatSqButtonComponent} from './mat-sq-button/mat-sq-button.component';
import {HelpComponent} from './help/help.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {LightsHelpComponent} from './help/lights/lights-help.component';
import {BlindsHelpComponent} from './help/blinds-help/blinds-help.component';
import {ClimateHelpComponent} from './help/climate-help/climate-help.component';
import {DoorHelpComponent} from './help/door-help/door-help.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {WorkoutToolsComponent} from './workout-tools/workout-tools.component';
import {UserComponent} from './pages/user/user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { BookGymComponent } from './pages/book-gym/book-gym.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

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
    HelpComponent,
    LightsHelpComponent,
    BlindsHelpComponent,
    ClimateHelpComponent,
    DoorHelpComponent,
    WorkoutToolsComponent,
    UserComponent,
    BookGymComponent
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
    MatDialogModule,
    MatTabsModule,
    MatSliderModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
