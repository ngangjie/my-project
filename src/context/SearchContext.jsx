import React, { createContext, useContext } from "react";
import { useState } from "react";

export const SearchAPI = createContext();

export const SearchProvider = ({ children }) => {
  const [api, setApi] = useState("");
  const [post, setPost] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const values = { api, setApi, post, setPost, isloading, setIsLoading };
  return <SearchAPI.Provider value={values}>{children}</SearchAPI.Provider>;
};

export const useSearch = () => {
 return useContext(SearchAPI);
};
