import React, { useContext, useState } from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "../context/SearchContext";
import { searchGithub, searchYoutube } from "../service";

const SearchBar = () => {
  const [text, settext] = useState("");
  const { api, setPost, setIsLoading, isLoading } = useSearch();

  React.useEffect(() => {}, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (api === "Youtube") {
      await searchYoutube()
        .then((response) => {
          setPost(response.data);
          setIsLoading(false);
          
        })
        .catch((error) => console.log(error));
        
    } else {
      await searchGithub()
        .then((response) => {
          setPost(response.data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="w-full md:w-auto">
      <form action="" onSubmit={handleSearch}>
        <div className="w-full relative pb-6">
          <SearchIcon
            color="primary"
            className="my-auto absolute top-4 left-3"
          />
          <input
            type="search"
            placeholder={api=='Youtube'?"Search Videos..." : "Search Github username..."}
            className="form-input p-4 bg-secondary rounded-xl shadow-md w-full  text-center text-white dark:bg-white dark:text-primary text-sm"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />

          <button
            type="submit"
            className="px-3 py-2 rounded-xl bg-blue text-white absolute right-2 top-1"
          >
            {isLoading == true ? "loading..." : "Search"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
