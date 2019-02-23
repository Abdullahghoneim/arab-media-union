import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { UpperbarComponent } from "./components/upperbar/upperbar.component";
import { MainNewComponent } from "./components/main-new/main-new.component";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LastNewsComponent } from './components/last-news/last-news.component';
import { ConnectUsComponent } from './components/connect-us/connect-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UpperbarComponent,
    MainNewComponent,
    AboutUsComponent,
    LastNewsComponent,
    ConnectUsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AngularFirestoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
