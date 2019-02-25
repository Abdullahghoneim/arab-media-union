import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-connect-us",
  templateUrl: "./connect-us.component.html",
  styleUrls: ["./connect-us.component.scss"]
})
export class ConnectUsComponent implements OnInit {
  name;
  email;
  phone;
  message;

  constructor(
    private db: AngularFireDatabase,
    private _flashMessagesService: FlashMessagesService
  ) {}
  ngOnInit() {}
  submitForm(data) {
    this.db
      .list("messages")
      .push(data)
      .then(res => {
        this._flashMessagesService.show(
          " تم ارسال الرسالة بنجاج  , شكرا لك  ",
          {
            cssClass: "alert alert-success text-center",
            timeout: 5000
          }
        );
        this.name = "";
        this.message = "";
        this.email = "";
        this.phone = "";
      })
      .catch(err => {
        this._flashMessagesService.show(
          "عفوا حدث خطا في النظام , حاول مجددا في وقت لاحق , شكرا لك",
          { cssClass: "alert alert-danger text-center", timeout: 5000 }
        );
      });
  }
}
