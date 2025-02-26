import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ODQmC68Ed0X1AEAZrAq7dzuOHGAD0XQMqkuN4HIFxLg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
