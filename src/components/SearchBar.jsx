import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        className="bg-gray-100 border border-red-400 rounded-sm w-70 px-3 py-1 mb-8 flex justify-self-end"
        type="search"
        placeholder="Cerca post ➡"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
