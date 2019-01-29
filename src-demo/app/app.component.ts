import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirebaseDemo';

  public items: Observable<any[]>
  public goldItems: Observable<any[]>

  constructor(db: AngularFirestore){
    this.items = db.collection('/Silver').valueChanges();
    this.goldItems = db.collection('/Gold').valueChanges();
  }
}
