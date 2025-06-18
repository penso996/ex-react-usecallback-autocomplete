import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

function App() {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchProducts = async (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(`http://localhost:3333/products?search=${query}`)
      const data = await res.json();
      setSuggestions(data);
      console.log("API");
    } catch (error) {
      console.error(error);
    }
  }

  const debouncedFetchProducts = useCallback(
    debounce(fetchProducts, 500)
    , []);

  useEffect(() => {
    debouncedFetchProducts(query);
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
      {suggestions.length > 0 && (
        <div>
          {suggestions.map((p) => (
            <p key={p.id}>{p.name}</p>
          ))}
        </div>
      )}
    </>
  )
}

export default App