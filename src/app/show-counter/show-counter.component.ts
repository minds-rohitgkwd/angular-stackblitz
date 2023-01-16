import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css'],
})
export class ShowCounterComponent {
  count$ = new Observable();

  constructor(store: Store<any>) {
    this.count$ = store.select('round');
  }
}
