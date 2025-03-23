import {Component, OnInit} from '@angular/core';
import {WordRecord} from "../models/WordRecord";
import {ActivitiesService} from "../services/activities.service";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  addedWords: WordRecord[] = [];
  removedWords: WordRecord[] = [];
  page: number = 1;
  shouldDisplayAddedWords: boolean = false;
  shouldDisplayRemovedWords: boolean = false;


  constructor(private activitiesService: ActivitiesService) {
  }

  ngOnInit(): void {
    this.getAllAddedWords();
    this.getAllRemovedWords()
  }

  getAllAddedWords() {
    this.activitiesService.getAllAddedWords(this.page, 5).subscribe({
      next: (returnedWords) => {
        this.addedWords = returnedWords.content;
      }
    });
    this.shouldDisplayAddedWords = true;
  }

  getAllRemovedWords() {
    this.activitiesService.getAllRemovedWords(this.page, 5).subscribe({
      next: (returnedWords) => {
        this.removedWords = returnedWords.content;
      }
    });
    this.shouldDisplayRemovedWords = true;
  }

  get numbers(): number[] {
    const limit = 10;
    return Array.from({length: limit}, (_, i) => i + 1);
  }

  next(isAddedWordsPaginator: boolean) {
    this.page++;
    if (isAddedWordsPaginator) {
      this.getAllAddedWords();
    } else {
      this.getAllRemovedWords()
    }
  }

  prev(isAddedWordsPaginator: boolean) {
    this.page--;
    if (isAddedWordsPaginator) {
      this.getAllAddedWords();
    } else {
      this.getAllRemovedWords()
    }
  }

  to(page: number, isAddedWordsPaginator: boolean) {
    this.page = page;
    if (isAddedWordsPaginator) {
      this.getAllAddedWords();
    } else {
      this.getAllRemovedWords()
    }
  }
}
