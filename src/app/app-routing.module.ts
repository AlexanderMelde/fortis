import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {BookGymComponent} from "./pages/book-gym/book-gym.component";
import {BookTrainerComponent} from "./pages/book-trainer/book-trainer.component";
import {FriendsComponent} from "./pages/friends/friends.component";
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from "./pages/login/login.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {RegisterComponent} from "./pages/register/register.component";
import {RoomComponent} from "./pages/room/room.component";
import {UserComponent} from "./pages/user/user.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'room', component: RoomComponent},
  {path: 'user', component: UserComponent},
  {path: 'book_gym', component: BookGymComponent},
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'book_trainer', component: BookTrainerComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {enableTracing: true} // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
