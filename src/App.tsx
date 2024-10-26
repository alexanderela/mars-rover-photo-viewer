import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { fetchRoverPhotos } from "./utils/API";
import Grid from "@mui/material/Grid2";
import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { Content } from "./components/Content";

const App = () => {
  const [roverPhotos, setRoverPhotos] = useState([]);

  const getInitialRoverPhotos = useCallback(async () => {
    const photosData = await fetchRoverPhotos({ rover: "curiosity", page: 1 });
    setRoverPhotos(photosData.photos);
    console.log("photosData.photos: ", photosData.photos);
  }, []);

  useEffect(() => {
    getInitialRoverPhotos();
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          height: "100vh",
          width: "100vw",
          padding: 0,
        }}
      >
        <Header />
        <SideNav />
        <Content />
      </Grid>
    </>
  );
};

export default App;
