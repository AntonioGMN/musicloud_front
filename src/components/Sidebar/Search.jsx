import { useState } from "react";

import Magnifier from "../Icons/Magnifier";

export default function Search({ onSearch = () => 0, placeholder = "Search" }) {
  const [search, setSearch] = useState('');

  function onEnter() {
    onSearch(search);
  }

  return (
    <div className="flex justify-between p-2 bg-white text-black rounded">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onEnter()}
        className="w-[100%]"
      />
      <button onClick={() => onSearch(search)}>
        <Magnifier width={16} height={16} />
      </button>
    </div>
  );
}
