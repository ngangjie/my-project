import React, { createContext, useContext } from "react";
import { useState } from "react";

export const SearchAPI = createContext();

export const SearchProvider = ({ children }) => {
  const [api, setApi] = useState("Youtube");
  const [post, setPost] = useState([]);
  const [Data, setData] = useState([])
  const [isloading, setIsLoading] = useState(false);
  const values = { api, setApi, post, setPost, isloading, setIsLoading, Data, setData };
  return <SearchAPI.Provider value={values}>{children}</SearchAPI.Provider>;
};

export const useSearch = () => {
  return useContext(SearchAPI);
};
