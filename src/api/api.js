import axios from "axios";

const BASE_URL = "https://qtify-backend.labs.crio.do";

// Fetch Top Albums
export const fetchTopAlbums = async () => {
  const response = await axios.get(`${BASE_URL}/albums/top`);
  return response.data;
};

// Fetch New Albums
export const fetchNewAlbums = async () => {
  const response = await axios.get(`${BASE_URL}/albums/new`);
  return response.data;
};

// Fetch Songs
export const fetchSongs = async () => {
  const response = await axios.get(`${BASE_URL}/songs`);
  return response.data;
};

// ✅ Fetch Genres (REQUIRED)
export const fetchGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genres`);
  return response.data.data;
};
