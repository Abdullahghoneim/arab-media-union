import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-viedos-lib",
  templateUrl: "./viedos-lib.component.html",
  styleUrls: ["./viedos-lib.component.scss"]
})
export class ViedosLibComponent implements OnInit {
  videos = [
    {
      embed:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/QXjU9qTsYCc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      embed:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/qLT7GmJdeA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
