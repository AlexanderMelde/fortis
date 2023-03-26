import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {RoomComponent} from "./pages/room/room.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'room', component: RoomComponent },
  { path: 'home',        component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

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
