import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <div
      className={`my-2 lg:my-6 flex items-center bg-gray-100 rounded-lg border ${
        inputFocused ? "border-blue-700" : "border-gray-500"
      }`}
    >
      <div className="px-2 text-lg text-blue-700">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        className="block w-full bg-transparent rounded-lg px-3 py-2 leading-tight"
        placeholder="Buscar"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
    </div>
  );
}
