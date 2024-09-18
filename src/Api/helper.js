export const fetcher = async (url) => {
  
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dc44998301mshfd8ecd0a22d439ap1f2f19jsn926ac6248874",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
