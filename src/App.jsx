import "./App.css";
import SearchBar from "./component/SearchBar";
import Home from "./component/Home";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useSearch } from "./context/SearchContext";
import { ThemeContext } from "./context/ThemeContext";
import { useContext, useEffect } from "react";
import YoutubeComp from "./component/YoutubeComp";

function App() {
  const { api, setApi } = useSearch("Youtube")
  const { toggleMode } = useContext(ThemeContext)

  useEffect(() => {
    if (localStorage.getItem("endpoint") === null) {
      localStorage.setItem("endpoint", "Youtube");
    }
  }, []);


  const handleSelect = (e) => {
    localStorage.setItem("endpoint", JSON.stringify(e.target.value));

    setApi(JSON.parse(localStorage.getItem("endpoint")));

  };
  return (
    <div className=" App justify-around w-50 bg-primary dark:bg-light py-8 md:py-28 relative">
      <div className="flex flex-col ">
        <h2 className="text-white dark:text-dark uppercase mt-10">Devfinder</h2>
        <div className="w-50 md:mx-40 flex flex-col justify-between item-center p-2">
          <select
            name=""
            id=""
            className="mb-2 py-1 rounded w-60 absolute left-6 top-10"
            onChange={handleSelect}
          >
            <option value="Youtube" >Youtube</option>
            <option value="github" >Github</option>
          </select>
          <div className="flex justify-between text-white dark:text-dark absolute right-6 top-10">
            <WbSunnyIcon onClick={toggleMode} />
          </div>
          <SearchBar className=" dark:text-dark" />
          {api == 'Youtube' ? <YoutubeComp /> : <Home className="dark:text-dark" />}
        </div>
      </div>
    </div>
  );
}

export default App;
