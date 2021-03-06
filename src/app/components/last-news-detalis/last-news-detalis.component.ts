import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "../../../services/News.Service";
@Component({
  selector: "app-last-news-detalis",
  templateUrl: "./last-news-detalis.component.html",
  styleUrls: ["./last-news-detalis.component.scss"]
})
export class LastNewsDetalisComponent implements OnInit {
  id: string;
  new;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.newsService.getNew(this.id).subscribe(newDetalis => {
      this.new = newDetalis;
    });
  }
}
