import {Component, OnInit} from '@angular/core';
import {WordRecord} from "../models/WordRecord";
import {AnagramCounter} from "../models/AnagramCounter";
import {AnagramService} from "../services/anagram.service";

@Component({
  selector: 'app-anagrams',
  templateUrl: './anagrams.component.html',
  styleUrls: ['./anagrams.component.css']
})
export class AnagramsComponent implements OnInit {
  anagrams: WordRecord[] = [];
  anagramCounterList: AnagramCounter[] = [];
  algorithmExecutionTime: number = 0;
  searchWord: WordRecord = new WordRecord('', '', '');
  shouldRunAlgorithm : boolean = false;
  shouldSearchWord: boolean = false;

  constructor(private anagramService: AnagramService) {
  }

  ngOnInit(): void {
  }

  countAnagramsOfAllWordLengths() {
    this.shouldRunAlgorithm = true;
    //Reset the counter list when the calc button is clicked
    this.anagramCounterList = [];
    this.anagramService.countAnagramsOfAllWordLengths().subscribe({
      next: (anagramsCounterResponse) => {
        this.anagramCounterList = anagramsCounterResponse.anagramCounterList;
        this.algorithmExecutionTime = anagramsCounterResponse.algorithmExecutionTime;
      }
    });
  }

  getAnagramsForGivenWord() {
    this.shouldSearchWord = true;
    this.anagramService.getAnagramsForGivenWord(this.searchWord.wordText).subscribe({
      next: (returnedAnagrams) => {
        this.anagrams = returnedAnagrams;
      }
    });
  }
}
