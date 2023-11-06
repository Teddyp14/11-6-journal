export default function JournalEntry(title, entry) {
    this.title = title;
    this.entry = entry;
    this.entryArray = [];
}

JournalEntry.prototype.entryWords = function () {
    this.entryArray = this.entry.split(/\s+|[^A-Za-z0-9]+/);
    return this.entryArray.length - 1;
};

JournalEntry.prototype.vowelCount = function () {
    const vowelList = "aeiou";
    let vowelCount = 0;
    this.entryArray.forEach(function (word) {
        for (const char of word) {
            if (vowelList.includes(char.toLowerCase())) {
                vowelCount += 1;
            }
        }
    });
    return vowelCount;
};

JournalEntry.prototype.consonantCount = function () {
    const vowelList = "aeiou";
    let consonantCount = 0;
    this.entryArray.forEach(function (word) {
        for (const char of word) {
            if (vowelList.includes(char.toLowerCase()) !== true) {
                consonantCount += 1;
            }
        }
    });
    return consonantCount;
};

JournalEntry.prototype.getTeaser = function () {
    const period = ["."];
    let firstSentence = "";
    for (let i = 0; i < this.entry.length; i++) {
        if (period.includes(this.entry[i])) {
            firstSentence = this.entry.slice(0, i + 1);
            break;
        }
    }

    const sentenceArray = firstSentence.split(" ");

    if (sentenceArray.length > 8) {
        let firstEight = sentenceArray.slice(0, 8);
        return firstEight.join(" ");
    } else {
        return sentenceArray.join(" ");
    }
};
