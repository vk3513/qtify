const BASE_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  const res = await fetch(`${BASE_URL}/albums/top`);
  return res.json();
};

export const fetchNewAlbums = async () => {
  const res = await fetch(`${BASE_URL}/albums/new`);
  return res.json();
};

export const fetchSongs = async () => {
  const res = await fetch(`${BASE_URL}/songs`);
  return res.json();
};
