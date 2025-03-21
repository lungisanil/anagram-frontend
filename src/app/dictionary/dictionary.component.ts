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

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.getAllWords();
  }

  getAllWords() {
    this.wordService.getAllWords(this.page, 20).subscribe({
      next: (returnedWords) => {
        this.words = returnedWords.content;
      }
    });
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
    this.wordService.removeWord(this.wordToRemove).subscribe({
      next: (removalResponse) => {
        if (removalResponse.message == 'Success') {
          this.wordRemovedSuccessful = true;
        }
      }
    });
    this.getAllWords();
  }

  removeClickedWord(clickedWord: string) {
    this.wordToRemove = clickedWord;
    this.removeWord();
  }

  get numbers(): number[] {
    const limit = 10;
    return Array.from({length: limit}, (_, i) => i + 1);
  }

  next() {
    this.page++;
    this.getAllWords();
  }

  prev() {
    this.page--;
    this.getAllWords();
  }

  to(page: number) {
    this.page = page;
    this.getAllWords();
  }
}
