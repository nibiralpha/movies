import { searchLoading, setSearchData } from "@redux/searchSlice";

import { Dispatch } from "@reduxjs/toolkit";
import { getSearchResults } from "@Api/Search";

const fetchSearchResults = (data: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(searchLoading(true));
console.log("zzzzzzzzzzzzzzzzzzzz");

      const searchResponse = await getSearchResults(data);
      const searchData = searchResponse.data;
      dispatch(setSearchData(searchData));

      dispatch(searchLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(searchLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchSearchResults };
