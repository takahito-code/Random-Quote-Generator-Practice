const defaultQuotes = ["If you can dream it, you can do it.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Action is the key to all success.",
  "No challenge, no growth.",
  "Effort never betrays you."];

  let quotes = JSON.parse(localStorage.getItem("quotes")) || defaultQuotes;

  const quoteDisplay = document.getElementById("quoteDisplay");
  const nextQuoteButton = document.getElementById("nextQuote");
  const newQuoteInput = document.getElementById("newQuote");
  const addQuoteButton = document.getElementById("addQuote");

  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = `"${quotes[randomIndex]}"`;
  };

  function addNewQuote() {
    const newQuote = newQuoteInput.value.trim();
    if(newQuote){
    quotes.push(newQuote);
    localStorage.setItem("quotes", JSON.stringify(quotes));
    newQuoteInput.value = "";
    alert("New quote added successfully!");
} else {
    alert("Please enter a quoteDisplay.");
}
  };

  nextQuoteButton.addEventListener("click", displayRandomQuote);
  addQuoteButton.addEventListener("click", addNewQuote);

  displayRandomQuote();
