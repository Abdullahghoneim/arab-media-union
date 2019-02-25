import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire/";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { UpperbarComponent } from "./components/upperbar/upperbar.component";
import { MainNewComponent } from "./components/main-new/main-new.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { LastNewsComponent } from "./components/last-news/last-news.component";
import { ConnectUsComponent } from "./components/connect-us/connect-us.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NationalOfficesComponent } from "./components/national-offices/national-offices.component";
import { MediaLiberaryComponent } from "./components/media-liberary/media-liberary.component";
import { PhotosLibComponent } from "./components/media-liberary/photos-lib/photos-lib.component";
import { ViedosLibComponent } from "./components/media-liberary/viedos-lib/viedos-lib.component";
import { LastNewsDetalisComponent } from "./components/last-news-detalis/last-news-detalis.component";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
// services
import { NewsService } from "../services/News.Service";
import { FlashMessagesService } from "angular2-flash-messages";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UpperbarComponent,
    MainNewComponent,
    AboutUsComponent,
    LastNewsComponent,
    ConnectUsComponent,
    FooterComponent,
    LastNewsDetalisComponent,
    NationalOfficesComponent,
    MediaLiberaryComponent,
    PhotosLibComponent,
    ViedosLibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [NewsService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private newsService: NewsService) {
    this.newsService.getNews();
  }
}
