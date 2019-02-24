import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/services/News.Service";

@Component({
  selector: "app-upperbar",
  templateUrl: "./upperbar.component.html",
  styleUrls: ["./upperbar.component.scss"]
})
export class UpperbarComponent implements OnInit {
  lastNews;
  constructor(private newService: NewsService) {}

  ngOnInit() {
    this.newService.getNews().subscribe(news => {
      this.lastNews = news;
    });
  }
}
