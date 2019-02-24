import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/services/News.Service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  lastNews;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      for (let i = 0; i < 2; i++) {
        console.log(news[i]);
        this.lastNews = news[i];
      }
    });
  }
}
