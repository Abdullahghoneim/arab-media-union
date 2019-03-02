import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { LastNewsComponent } from "./components/last-news/last-news.component";
import { ConnectUsComponent } from "./components/connect-us/connect-us.component";
import { LastNewsDetalisComponent } from "./components/last-news-detalis/last-news-detalis.component";
import { NationalOfficesComponent } from "./components/national-offices/national-offices.component";
import { MediaLiberaryComponent } from "./components/media-liberary/media-liberary.component";
import { PhotosLibComponent } from "./components/media-liberary/photos-lib/photos-lib.component";
import { ViedosLibComponent } from "./components/media-liberary/viedos-lib/viedos-lib.component";
import { MediaFormComponent } from './components/media-form/media-form.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "last-news", component: LastNewsComponent },
  { path: "last-news/:id", component: LastNewsDetalisComponent },
  { path: "connect-us", component: ConnectUsComponent },
  { path: "national-offices", component: NationalOfficesComponent },
  {path: 'survey', component: MediaFormComponent },
  {
    path: "media-liberary",
    component: MediaLiberaryComponent,
    children: [
      { path: "", redirectTo: "videos", pathMatch: "full" },
      { path: "videos", component: ViedosLibComponent },
      { path: "photos", component: PhotosLibComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
