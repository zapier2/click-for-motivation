import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  async function fetchQuote() {
    let url = "https://quoteslate.vercel.app/api/quotes/random";
    if (category) {
      url += `?tags=${category}`;
    }
    // const headers = new Headers();
    // headers.append("X-Api-Key", import.meta.env.VITE_API_KEY);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setQuote(json.quote);
      setAuthor(json.author);
      setTags(json.tags);
      console.log(json);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <button onClick={() => fetchQuote()}>Fetch Quote</button>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Random</option>
        <option value="life">Life</option>
        <option value="wisdom">Wisdom</option>
      </select>
      <p>{quote}</p>
      <p> - {author}</p>
      {tags.map((tag) => (
        <p key={tag} style={{ marginRight: "8px" }}>
          #{tag}
        </p>
      ))}
    </div>
  );
}

export default App;
