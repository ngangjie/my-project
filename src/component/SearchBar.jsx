import React, { useContext, useState } from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "../context/SearchContext";
import { searchGithub, searchYoutube } from "../service";

const SearchBar = () => {
  const [text, settext] = useState("");
  const { api, setPost, setData } = useSearch();
  const [Loader, setLoader] = useState(false);
  const [Error, setError] = useState("");
  React.useEffect(() => {}, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (api === "Youtube") {
      await searchYoutube(text)
        .then((response) => {
          setData(response.data);
          setLoader(false);
          setError("");
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
          setError(error.message);
        });
    } else {
      await searchGithub(text)
        .then((response) => {
          setPost(response.data);
          setLoader(false);
          setError("");
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
          setError(error.message);
        });
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
            placeholder={
              api == "Youtube"
                ? "Search Videos..."
                : "Search Github username..."
            }
            className="form-input p-4 bg-secondary rounded-xl shadow-md w-full  text-center text-white dark:bg-white dark:text-primary text-sm"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />

          <button
            type="submit"
            className="px-3 py-2 rounded-xl bg-blue text-white absolute right-2 top-1"
          >
            {Loader == true ? "loading..." : "Search"}
          </button>
        </div>
      </form>
      {Error ? <span className="text-base text-orange">{Error}</span> : ""}
    </div>
  );
};

export default SearchBar;
