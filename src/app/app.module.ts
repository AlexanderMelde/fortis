import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS, MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MatBadgeModule} from "@angular/material/badge";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatLineModule, MatRippleModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from "@angular/material/slider";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from "@angular/material/stepper";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlindsHelpComponent} from './modals/help/blinds-help/blinds-help.component';
import {ClimateHelpComponent} from './modals/help/climate-help/climate-help.component';
import {DoorHelpComponent} from './modals/help/door-help/door-help.component';
import {HelpComponent} from './modals/help/help.component';
import {LightsHelpComponent} from './modals/help/lights/lights-help.component';
import {AboutComponent} from './pages/about/about.component';
import {BookGymComponent} from './pages/book-gym/book-gym.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {RoomComponent} from './pages/room/room.component';
import {UserComponent} from './pages/user/user.component';

import {GymCardComponent} from './ui-components/gym-card/gym-card.component';
import {IconListItemComponent} from './ui-components/icon-list-item/icon-list-item.component';
import {IconListComponent} from './ui-components/icon-list/icon-list.component';
import {InfobannerComponent} from './ui-components/infobanner/infobanner.component';
import {
  MatAccordionResponsiveComponent
} from './ui-components/mat-accordion-responsive/mat-accordion-responsive.component';
import {MatSqButtonComponent} from './ui-components/mat-sq-button/mat-sq-button.component';
import {TaskListComponent} from './ui-components/task-list/task-list.component';
import {TaskComponent} from './ui-components/task/task.component';
import {WorkoutToolsComponent} from './modals/workout-tools/workout-tools.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MediacontrolComponent } from './modals/mediacontrol/mediacontrol.component';
import { BookingCardComponent } from './ui-components/booking-card/booking-card.component';
import { BookTrainerComponent } from './pages/book-trainer/book-trainer.component';
import { SocialComponent } from './modals/social/social.component';
import { TrainerCardComponent } from './ui-components/trainer-card/trainer-card.component';
import { FriendsComponent } from './pages/friends/friends.component';

const MODULE_DATE_FORMATS = {
  parse: {
    dateInput: 'dd.LL.yyyy'
  },
  display: {
    dateInput: 'dd.LL.yyyy',
    monthYearLabel: 'LLLL yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'LLLL YYYY'
  }
};

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
    BookGymComponent,
    GymCardComponent,
    IconListComponent,
    IconListItemComponent,
    MatAccordionResponsiveComponent,
    InfobannerComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    MediacontrolComponent,
    BookingCardComponent,
    BookTrainerComponent,
    SocialComponent,
    TrainerCardComponent,
    FriendsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatDialogModule,
        MatTabsModule,
        MatSliderModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatListModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        MatRadioModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatLuxonDateModule,
        NgOptimizedImage,
        MatBottomSheetModule,
        MatRippleModule,
        MatMenuModule,
        MatBadgeModule,
        MatTooltipModule,
        MatLineModule
    ],
  providers: [
    {provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    {provide: DateAdapter, useClass: LuxonDateAdapter, deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS]},
    {provide: MAT_DATE_FORMATS, useValue: MODULE_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
