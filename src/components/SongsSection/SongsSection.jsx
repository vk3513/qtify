import { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Section from "../Section/Section";
import { fetchSongs, fetchGenres } from "../../api/api";

export default function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    fetchSongs().then(setSongs);

    fetchGenres().then((data) => {
     
      const orderedGenres = [
        { key: "all", label: "All" },
        ...data
          .filter((g) =>
            ["rock", "pop", "jazz", "blues"].includes(g.key)
          )
          .map((g) => ({
            key: g.key,
            label: g.label,
          })),
      ];

      setGenres(orderedGenres);
    });
  }, []);

  const filteredSongs =
    active === "all"
      ? songs
      : songs.filter(
          (song) => song.genre.key === active
        );

  return (
    <div style={{ backgroundColor: "#121212" }}>
      <h2 style={{ color: "white", padding: "0 32px" }}>
        Songs
      </h2>

      <Tabs
        value={active}
        onChange={(e, val) => setActive(val)}
        textColor="inherit"
        indicatorColor="primary"
        sx={{ paddingLeft: "32px", color: "white" }}
      >
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Section
        title=""
        data={filteredSongs}
        type="song"
        hideToggle={true}
      />
    </div>
  );
}
