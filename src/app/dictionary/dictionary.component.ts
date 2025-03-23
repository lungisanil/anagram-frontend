import {Component, OnInit} from '@angular/core';
import {WordRecord} from "../models/WordRecord";
import {WordService} from "../services/word.service";

@Component({
  selector: 'app-home',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words: WordRecord[] = [];
  wordToAdd: string = '';
  wordAddedSuccessful: boolean = false;
  wordToRemove: string = '';
  wordRemovedSuccessful: boolean = false;
  page: number = 1;
  private pageSize = 20;
  private paginationLimit = 10;
  shouldDisplayDictionary: boolean = false;
  shouldDisplayRemovalToastMessage: boolean = false;
  removeButtonClicked: boolean = false;

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.getAllWords();
  }

  getAllWords() {
    this.wordService.getAllWords(this.page, this.pageSize).subscribe({
      next: (returnedWords) => {
        this.words = returnedWords.content;
      }
    });
    this.shouldDisplayDictionary = true;
  }

  addWord() {
    this.wordService.addWord(this.wordToAdd).subscribe({
      next: (addedWord) => {
        if (addedWord.wordText == this.wordToAdd) {
          this.wordAddedSuccessful = true;
        }
      }
    });
    this.getAllWords();
  }

  removeWord() {
    this.removeButtonClicked = true;
    this.wordService.removeWord(this.wordToRemove).subscribe({
      next: (removalResponse) => {
        if (removalResponse.message == 'Success') {
          this.wordRemovedSuccessful = true;
        }
      }
    });
    this.shouldDisplayRemovalToastMessage = true;
    this.getAllWords();
  }

  removeClickedWord(clickedWord: string) {
    this.wordToRemove = clickedWord;
    this.removeWord();
  }

  get numbers(): number[] {
    return Array.from({length: this.paginationLimit}, (_, i) => i + 1);
  }

  next() {
    this.page++;
    this.getAllWords();
  }

  prev() {
    this.page--;
    this.getAllWords();
  }

  to(toPage: number) {
    this.page = toPage;
    this.getAllWords();
  }

  resetFlags() {
    this.shouldDisplayRemovalToastMessage = false;
    this.removeButtonClicked = false;
  }
}
