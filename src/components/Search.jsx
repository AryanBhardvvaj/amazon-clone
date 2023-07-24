import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import { callAPI } from "../utils/CallApi";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm allnav"
        >
          <option>All</option>
          <option>Prime Day</option>
          <option>Alexa Skills</option>
          <option>Amazon Devices</option>
          <option>Amazon Fashion</option>
          <option>Amazon Pharmacy</option>
          <option>Appliences</option>
          <option>Apps & Games</option>
          <option>Baby</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Car & Motorbike</option>
          <option>Clothing & Accessories</option>
          <option>Collectables</option>
          <option>Computers & Accessories</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Garden & Outdoors</option>
          <option>Gift Cards</option>
          <option>Grocery</option>
          <option>Helth</option>
          <option>Home & Kitchen</option>
          <option>Laxury</option>
          <option>Movie</option>
          <option>Music</option>
          <option>Toys & Games</option>
          <option>Video</option>
          <option>Watches</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
          placeholder="Search Amazon.in"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
