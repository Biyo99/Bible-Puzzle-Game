if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then(() => console.log("Service Worker Registered"))
      .catch(err => console.log("Service Worker Registration Failed:", err));
  }
  
  const verses = [
    "For God so loved the world that he gave his only Son.",
    "The Lord is my shepherd; I shall not want.",
    "I can do all things through Christ who strengthens me.",
  ];
  
  let currentPuzzle = 0;
  
  function displayPuzzle() {
    const verseContainer = document.getElementById("verse-container");
    verseContainer.innerHTML = "";
    const verse = verses[currentPuzzle].split(" ");
    verse.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word;
      span.onclick = () => span.remove();
      verseContainer.appendChild(span);
    });
  }
  
  function shuffle() {
    const verseContainer = document.getElementById("verse-container");
    const words = Array.from(verseContainer.children);
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i].textContent, words[j].textContent] = [words[j].textContent, words[i].textContent];
    }
  }
  
  function showHint() {
    const hint = document.getElementById("hint");
    hint.textContent = `Hint: "${verses[currentPuzzle]}"`;
  }
  
  function nextPuzzle() {
    const scoreCounter = document.getElementById("score-counter");
    currentPuzzle = (currentPuzzle + 1) % verses.length;
    scoreCounter.textContent = parseInt(scoreCounter.textContent) + 1;
    displayPuzzle();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayPuzzle();
  });
  