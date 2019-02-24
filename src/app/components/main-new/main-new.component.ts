import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../services/News.Service";
@Component({
  selector: "app-main-new",
  templateUrl: "./main-new.component.html",
  styleUrls: ["./main-new.component.scss"]
})
export class MainNewComponent implements OnInit {
  lastNew;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.lastNew = news;
    });
  }
}
