import {
    createApi,
    BaseQueryFn,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  
  const baseQuery = fetchBaseQuery({
    baseUrl: ``,
  });
  
  const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
    const res = await baseQuery(args, api, extraOptions);
    return res;
  };
  
  export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryExtended,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ["todo",'file'],
    endpoints: () => ({}),
  });