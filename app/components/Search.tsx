"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState<string>("");
  const searchParam = useSearchParams();
  const [valueSearch, setValueSearch] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    let search = searchParam.get("search");
    if (search) setValueSearch(search);
  }, [searchParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    router.push(`/posts?search=${search}`);
  };

  return (
    <Suspense>
      <input
        onChange={handleChange}
        value={search}
        className="border-solid border-2  border-gray-400 p-[10px]"
        type="text"
      />
      <button
        onClick={handleClick}
        className="bg-black text-white rounded-[5px] p-[5px]"
      >
        Tìm kiếm
      </button>
      <p>tìm kiếm:{valueSearch}</p>
    </Suspense>
  );
}

export default Search;
