import "./App.css";
import SearchBar from "./component/SearchBar";
import Home from "./component/Home";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import YoutubeComp from "./component/YoutubeComp";
import { useSearch } from "./context/SearchContext";

function App() {
  const { api, post, setApi } = useSearch();
  const { toggleMode } = useContext(ThemeContext);

  const handleSelect = (e) => {
    setApi(e.target.value);
  };
  return (
    <div className=" App min-w-7xl bg-primary dark:bg-light py-8 md:py-28 relative">
      <h2 className="text-white dark:text-dark uppercase mt-10">Devfinder</h2>
      <div className="w-auto md:mx-40 flex flex-col justify-between item-center p-2">
        <select
          name=""
          id=""
          className="mb-2 py-1 rounded w-60 absolute left-6 top-10"
          onChange={handleSelect}
        >
          <option value="Youtube">Youtube</option>
          <option value="github">Github</option>
        </select>
        <div className="flex justify-between text-white dark:text-dark absolute right-6 top-10">
          <WbSunnyIcon onClick={toggleMode} />
        </div>

        <SearchBar className="dark:text-dark" />

        {api == "Youtube" ? (
          <YoutubeComp />
        ) : post ==[] ? (
          <p className="text-slate dark:text-primary">No Profile Available</p>
         
        ) : (
          <Home className="dark:text-dark" />
        )}
      </div>
    </div>
  );
}

export default App;
