import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import removeVietnameseAndWhitespace from "../../func/remove.class.js";

import { FUNC_SEARCH_DATA } from "../../service/index.js";

function InputSearch() {
  const navigation = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const value = removeVietnameseAndWhitespace(
        searchValue.toLocaleLowerCase(),
        false
      );
      navigation(`/search/${value}`);
    }
  };

  return (
    <div>
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          class="w-5 h-5 text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        id="search"
        class="block w-full p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  );
}

export default InputSearch;
