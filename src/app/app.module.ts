import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BlazerService } from './blazer.service';
import { masterFirebaseConfig } from './api_keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlazerDetailComponent } from './blazer-detail/blazer-detail.component';
import { ManagerComponent } from './manager/manager.component';
import { EditBlazerComponent } from './edit-blazer/edit-blazer.component';
import { FilterPipe } from './filter.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlazerDetailComponent,
    ManagerComponent,
    EditBlazerComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
