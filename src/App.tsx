import React, { useCallback, useEffect } from "react";
import "./App.css";
import { fetchRoverPhotos } from "./utils/API";
import Grid from "@mui/material/Grid2";
import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { Content } from "./components/Content";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setPhotos } from "./reducers/roverPhotosSlice";
import { Pagination } from "@mui/material";
import { setPage } from "./reducers/pageSlice";

const App = () => {
  const page = useAppSelector(state => state.page);
  const roverPhotos = useAppSelector(state => state.roverPhotos);
  const selectedRover = useAppSelector(state => state.selectedRover);
  const dispatch = useAppDispatch();

  const handleSetRoverPhotos = useCallback(async () => {
    const photosData = await fetchRoverPhotos({ rover: selectedRover, page });
    dispatch(setPhotos(photosData.photos))
  }, []);
  
  useEffect(() => {
    handleSetRoverPhotos();
  }, [page, selectedRover]);

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          width: "100vw",
          padding: 0,
        }}
      >
        <Header />
        <SideNav />
        <Content />
        <Pagination
          count={Math.ceil(roverPhotos.length / 10)}
          page={page}
          shape="rounded" 
          color="secondary"
          onChange={(e, newPage: number) => {
            dispatch(setPage(newPage));
          }}
        />
      </Grid>
    </>
  );
};

export default App;
