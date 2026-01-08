import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { fetchTopAlbums, fetchNewAlbums } from "../../api/api";

export default function AlbumsSection() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [showAllTop, setShowAllTop] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);

  useEffect(() => {
    fetchTopAlbums().then(setTopAlbums);
    fetchNewAlbums().then(setNewAlbums);
  }, []);

  const renderAlbums = (albums, showAll) =>
    (showAll ? albums : albums.slice(0, 7)).map((album) => (
      <Card
        key={album.id}
        image={album.image}
        title={album.title}
        followers={album.follows}
      />
    ));

  return (
    <section>
      {/* Top Albums */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Top Albums</h2>
        <span
          style={{ color: "#34C94B", cursor: "pointer" }}
          onClick={() => setShowAllTop(!showAllTop)}
        >
          {showAllTop ? "Collapse" : "Show all"}
        </span>
      </div>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {renderAlbums(topAlbums, showAllTop)}
      </div>

      {/* New Albums */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <h2>New Albums</h2>
        <span
          style={{ color: "#34C94B", cursor: "pointer" }}
          onClick={() => setShowAllNew(!showAllNew)}
        >
          {showAllNew ? "Collapse" : "Show all"}
        </span>
      </div>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {renderAlbums(newAlbums, showAllNew)}
      </div>
    </section>
  );
}
