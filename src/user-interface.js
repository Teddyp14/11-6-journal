import JournalEntry from "./business";
function handleFormSubmission() {
    event.preventDefault();

    const userTitle = document.querySelector("input#title").value;
    const userEntry = document.querySelector("input#entry").value;

    const journal = new JournalEntry(userTitle, userEntry, []);

    journal.entryWords();

    const journalVowels = journal.vowelCount();
    const journalConsonants = journal.consonantCount();
    const teaser = journal.getTeaser();

    const vowelOutput = document.querySelector("div#vowelOutput");
    vowelOutput.innerText = journalVowels;


    const consonantOutput = document.querySelector("div#consonantOutput");
    consonantOutput.innerText = journalConsonants;


    const teaserOutput = document.querySelector("div#teaserOutput");
    teaserOutput.innerText = teaser;
}

window.addEventListener("load", function () {
    document.querySelector("form#journalForm").addEventListener("submit", handleFormSubmission);
});