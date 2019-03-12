import { Component, OnInit } from "@angular/core";
import { ArabWorldService } from "src/services/arabWorld.service";

@Component({
  selector: "app-national-offices",
  templateUrl: "./national-offices.component.html",
  styleUrls: ["./national-offices.component.scss"]
})
export class NationalOfficesComponent implements OnInit {
  countrys;
  constructor(private countryService: ArabWorldService) {}

  ngOnInit() {
    this.countrys = this.countryService.getCountrys();
  }
}
