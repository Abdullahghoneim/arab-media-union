import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { LastNewsComponent } from "./components/last-news/last-news.component";
import { ConnectUsComponent } from "./components/connect-us/connect-us.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "last-news", component: LastNewsComponent },
  { path: "connect-us", component: ConnectUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
