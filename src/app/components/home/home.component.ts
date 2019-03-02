import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/services/News.Service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  lastNews;
  mainNews; 
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.lastNews = news.reverse()
      this.mainNews = news.slice(0, 2); 
      console.log(this.mainNews)
    });
  }
}
