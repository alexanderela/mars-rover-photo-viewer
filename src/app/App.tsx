import { Suspense, useCallback, useEffect } from "react";
import "./App.css";
import { fetchRoverPhotos } from "../api/API";
import Grid from "@mui/material/Grid2";
import { Header } from "../layout/Header";
import { SideNav } from "../layout/SideNav";
import { Content } from "../layout/Content";
import { useAppDispatch } from "./hooks";
import { setPhotos } from "../features/photos/PhotoViewer/photoViewerSlice";
import { CircularProgress } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";


const App = () => {
  const { rover } = useParams();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handleSetRoverPhotos = useCallback(async () => {
    const photosData = await fetchRoverPhotos({ 
      rover: rover as string, 
      page: page as string 
    });
    dispatch(setPhotos(photosData));
  }, [dispatch, page, rover]);
  
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
