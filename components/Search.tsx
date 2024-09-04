import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <input
      onChange={handleChange}
      value={search}
      className="border-solid border-2  border-gray-400 p-[10px]"
      type="text"
    />
  );
}

export default Search;
