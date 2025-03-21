import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivitiesComponent} from './activities/activities.component';
import {AnagramsComponent} from './anagrams/anagrams.component';


@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    ActivitiesComponent,
    AnagramsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
