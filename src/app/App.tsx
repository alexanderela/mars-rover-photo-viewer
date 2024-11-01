import React, { Suspense, useCallback, useEffect } from "react";
import "./App.css";
import { fetchRoverPhotos } from "../api/API";
import Grid from "@mui/material/Grid2";
import { Header } from "../layout/Header";
import { SideNav } from "../layout/SideNav";
import { Content } from "../layout/Content";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setPhotos } from "../features/photos/PhotoViewer/photoViewerSlice";
import { CircularProgress } from "@mui/material";


const App = () => {
  const page = useAppSelector(state => state.roverPhotos.page);
  const selectedRover = useAppSelector(state => state.roverPhotos.selectedRover);
  const dispatch = useAppDispatch();

  const handleSetRoverPhotos = useCallback(async () => {
    const photosData = await fetchRoverPhotos({ rover: selectedRover, page });
    dispatch(setPhotos(photosData))
  }, [dispatch, page, selectedRover]);
  
  useEffect(() => {
    handleSetRoverPhotos();
  }, [handleSetRoverPhotos]);

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          height: "100%",
          width: "100vw",
          padding: 0,
        }}
      >
        <Header />
        <SideNav />
        <Suspense fallback={<CircularProgress />}>
          <Content />
        </Suspense>
      </Grid>
    </>
  );
};

export default App;
