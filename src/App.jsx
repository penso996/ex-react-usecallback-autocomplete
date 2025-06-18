import { useState } from "react";

function App() {

  const [query, setQuery] = useState("");

  return (
    <>
      <h1>Autocomplete</h1>
      <input
        type="text"
        placeholder="Cerca"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </>
  )
}

export default App