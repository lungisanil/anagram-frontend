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
  removedWordsPage: number = 1;
  shouldDisplayAddedWords: boolean = false;
  shouldDisplayRemovedWords: boolean = false;
  private pageSize = 5;
  private paginationLimit = 10;
  addedWordsPage: number = 1;

  constructor(private activitiesService: ActivitiesService) {
  }

  ngOnInit(): void {
    this.getAllAddedWords();
    this.getAllRemovedWords()
  }

  getAllAddedWords() {
    this.activitiesService.getAllAddedWords(this.addedWordsPage, this.pageSize).subscribe({
      next: (returnedWords) => {
        this.addedWords = returnedWords.content;
      }
    });
    this.shouldDisplayAddedWords = true;
  }

  getAllRemovedWords() {
    this.activitiesService.getAllRemovedWords(this.removedWordsPage, this.pageSize).subscribe({
      next: (returnedWords) => {
        this.removedWords = returnedWords.content;
      }
    });
    this.shouldDisplayRemovedWords = true;
  }

  get numbers(): number[] {
    return Array.from({length: this.paginationLimit}, (_, i) => i + 1);
  }

  next(isAddedWordsPaginator: boolean) {
    if (isAddedWordsPaginator) {
      this.addedWordsPage++
      this.getAllAddedWords();
    } else {
      this.removedWordsPage++;
      this.getAllRemovedWords()
    }
  }

  prev(isAddedWordsPaginator: boolean) {
    if (isAddedWordsPaginator) {
      this.addedWordsPage--;
      this.getAllAddedWords();
    } else {
      this.removedWordsPage--;
      this.getAllRemovedWords()
    }
  }

  to(page: number, isAddedWordsPaginator: boolean) {
    if (isAddedWordsPaginator) {
      this.addedWordsPage = page;
      this.getAllAddedWords();
    } else {
      this.removedWordsPage = page;
      this.getAllRemovedWords()
    }
  }
}
