import React, { Suspense, useCallback, useEffect } from "react";
import "./App.css";
import { fetchRoverPhotos } from "./utils/API";
import Grid from "@mui/material/Grid2";
import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { Content } from "./components/Content";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setPhotos } from "./reducers/roverPhotosSlice";
import { CircularProgress } from "@mui/material";


const App = () => {
  const page = useAppSelector(state => state.page);
  const selectedRover = useAppSelector(state => state.selectedRover);
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
