import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class NewsService {
  newsCollection: AngularFirestoreCollection<any>;
  lastNews: Observable<any[]>;
  newsDoc: AngularFirestoreDocument<any>;
  new: Observable<any>;
  constructor(private db: AngularFirestore) {
    //   get news collection with ID
    this.newsCollection = this.db.collection<any>("news");
    this.lastNews = this.newsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
  // get all news
  getNews() {
    return this.lastNews;
  }
  getNew(id) {
    this.newsDoc = this.db.doc(`news/${id}`);
    this.new = this.newsDoc.valueChanges();
    return this.new;
  }
}
