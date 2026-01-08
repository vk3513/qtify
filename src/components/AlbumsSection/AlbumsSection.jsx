import { useEffect, useState } from "react";
import { fetchTopAlbums, fetchNewAlbums } from "../../api/api";
import Section from "../Section/Section";

export default function AlbumsSection() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    fetchTopAlbums().then(setTopAlbums);
    fetchNewAlbums().then(setNewAlbums);
  }, []);

  return (
    <>
      <Section title="Top Albums" albums={topAlbums} />
      <Section title="New Albums" albums={newAlbums} />
    </>
  );
}
