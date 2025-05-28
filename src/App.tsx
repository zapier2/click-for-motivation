import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  async function fetchQuote() {
    const url = "https://api.api-ninjas.com/v1/quotes";
    const headers = new Headers();
    headers.append("X-Api-Key", "h2btFMfjU5KOT10d5MWlrQ==ytmHdQpSJi4Bpqzb");
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      const firstQuote = json[0];
      setQuote(firstQuote.quote);
      setAuthor(firstQuote.author);
      setCategory(firstQuote.category);
      console.log(json);
    } catch (error: any) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <button onClick={() => fetchQuote()}>Fetch Quote</button>
      <p>{quote}</p>
      <p> - {author}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default App;
