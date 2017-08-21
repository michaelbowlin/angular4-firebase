import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA7QkeebTMPs4DxgtsnYNy3v9K01g9ZvcY",
  authDomain: "myapp-10b72.firebaseapp.com",
  databaseURL: "https://myapp-10b72.firebaseio.com",
  storageBucket: "myapp-10b72.appspot.com",
  messagingSenderId: "44536681221"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
