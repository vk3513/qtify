import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { fetchTopAlbums } from "../../services/api";

export default function AlbumsSection() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchTopAlbums().then(setAlbums);
  }, []);

  return (
    <section>
      <h2>Top Albums</h2>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {albums.map(album => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            followers={album.follows}
          />
        ))}
      </div>
    </section>
  );
}
