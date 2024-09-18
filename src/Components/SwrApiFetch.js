import React, { useEffect } from "react";
import useSwr from "swr";
import { fetcher } from "../Api/helper";
const url =
  "https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it";
const SwrApiFetch = () => {
  const { data: user, error, isValidating } = useSwr(url, fetcher,{refreshInterval:20000000});
  useEffect(() => {
    console.log(",, ", user);
  }, [user]);
  return <div>hello</div>;
};

export default SwrApiFetch;
