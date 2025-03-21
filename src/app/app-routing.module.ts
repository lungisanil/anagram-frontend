import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DictionaryComponent} from './dictionary/dictionary.component'
import {AnagramsComponent} from "./anagrams/anagrams.component";
import {ActivitiesComponent} from "./activities/activities.component";

const routes: Routes = [
  { path : '', component : DictionaryComponent},
  { path : 'dictionary', component : DictionaryComponent},
  { path : 'anagrams', component : AnagramsComponent},
  { path : 'activities', component : ActivitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
