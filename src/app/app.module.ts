import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './ngrx/counter.reducer'

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ShowCounterComponent } from './show-counter/show-counter.component';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({round : counterReducer})],
  declarations: [AppComponent, MyCounterComponent, ShowCounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/