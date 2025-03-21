export class WordRecord {
  wordText: string;
  effectiveFrom: string;
  effectiveTo: string;

  constructor(wordText: string, effectiveFrom: string, effectiveTo: string) {
    this.wordText = wordText;
    this.effectiveFrom = effectiveFrom;
    this.effectiveTo = effectiveTo;
  }
}
