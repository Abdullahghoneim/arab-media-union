import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../services/News.Service";

@Component({
  selector: "app-last-news",
  templateUrl: "./last-news.component.html",
  styleUrls: ["./last-news.component.scss"]
})
export class LastNewsComponent implements OnInit {
  lastNews;
  constructor(private NewsService: NewsService) {}
  ngOnInit() {
    this.NewsService.getNews().subscribe(news => {
      this.lastNews = news;
    });
  }
}
