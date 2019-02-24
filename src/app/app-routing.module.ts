import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { LastNewsComponent } from "./components/last-news/last-news.component";
import { ConnectUsComponent } from "./components/connect-us/connect-us.component";
import { LastNewsDetalisComponent } from "./components/last-news-detalis/last-news-detalis.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "last-news", component: LastNewsComponent },
  { path: "last-news/:id", component: LastNewsDetalisComponent },
  { path: "connect-us", component: ConnectUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
