import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../services/News.Service";
@Component({
  selector: "app-last-news",
  templateUrl: "./last-news.component.html",
  styleUrls: ["./last-news.component.scss"]
})
export class LastNewsComponent implements OnInit {
  lastNews;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.lastNews = news;
    });
  }
}
