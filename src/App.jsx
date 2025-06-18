import { useEffect, useState } from "react";

function App() {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log(suggestions)

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    fetch(`http://localhost:3333/products?search=${query}`)
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(error => console.error(error));
  }, [query]);

  return (
    <>
      <h1>Autocomplete</h1>
      <input
        type="text"
        placeholder="Cerca"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {/* {suggestions.length > 0 && (
        <div>
          {suggestions.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )} */}
    </>
  )
}

export default App