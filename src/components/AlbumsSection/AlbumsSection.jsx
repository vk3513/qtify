import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { fetchTopAlbums, fetchNewAlbums } from "../../api/api";

export default function AlbumsSection() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [showAllTop, setShowAllTop] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);

  const topRef = useRef(null);
  const newRef = useRef(null);

  useEffect(() => {
    fetchTopAlbums().then(setTopAlbums);
    fetchNewAlbums().then(setNewAlbums);
  }, []);

  const scroll = (ref, dir) => {
    if (!ref.current) return;
    const scrollAmount = dir === "left" ? -300 : 300;
    ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const renderAlbums = (albums) =>
    albums.map((album) => (
      <Card
        key={album.id}
        image={album.image}
        title={album.title}
        followers={album.follows}
        type="album"
      />
    ));

  return (
    <section style={{ backgroundColor: "#121212", padding: "24px 32px" }}>
      {/* -------- Top Albums -------- */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "white" }}>Top Albums</h2>
        <span
          style={{ color: "#34C94B", cursor: "pointer" }}
          onClick={() => setShowAllTop(!showAllTop)}
        >
          {showAllTop ? "Collapse" : "Show all"}
        </span>
      </div>

      <div style={{ position: "relative", marginBottom: "32px" }}>
        {!showAllTop && (
          <>
            <button
              onClick={() => scroll(topRef, "left")}
              style={arrowStyle("left")}
            >
              ‹
            </button>
            <button
              onClick={() => scroll(topRef, "right")}
              style={arrowStyle("right")}
            >
              ›
            </button>
          </>
        )}

        <div
          ref={topRef}
          style={
            showAllTop
              ? gridStyle
              : carouselStyle
          }
        >
          {renderAlbums(topAlbums)}
        </div>
      </div>

      {/* -------- New Albums -------- */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "white" }}>New Albums</h2>
        <span
          style={{ color: "#34C94B", cursor: "pointer" }}
          onClick={() => setShowAllNew(!showAllNew)}
        >
          {showAllNew ? "Collapse" : "Show all"}
        </span>
      </div>

      <div style={{ position: "relative" }}>
        {!showAllNew && (
          <>
            <button
              onClick={() => scroll(newRef, "left")}
              style={arrowStyle("left")}
            >
              ‹
            </button>
            <button
              onClick={() => scroll(newRef, "right")}
              style={arrowStyle("right")}
            >
              ›
            </button>
          </>
        )}

        <div
          ref={newRef}
          style={
            showAllNew
              ? gridStyle
              : carouselStyle
          }
        >
          {renderAlbums(newAlbums)}
        </div>
      </div>
    </section>
  );
}

const carouselStyle = {
  display: "flex",
  gap: "16px",
  overflowX: "hidden", 
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: "16px",
};

const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "0",
  transform: "translateY(-50%)",
  background: "#34C94B",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  color: "black",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: 10,
});
