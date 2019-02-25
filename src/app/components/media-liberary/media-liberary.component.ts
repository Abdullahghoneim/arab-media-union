import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-media-liberary",
  templateUrl: "./media-liberary.component.html",
  styleUrls: ["./media-liberary.component.scss"]
})
export class MediaLiberaryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
