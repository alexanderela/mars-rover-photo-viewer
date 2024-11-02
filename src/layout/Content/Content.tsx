import Grid from "@mui/material/Grid2";
import { Box, Tabs } from "@mui/material";
import { StyledTab } from "./Content-styled";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setPhotos } from "../../features/photos/PhotoViewer/photoViewerSlice";
import { Rover } from "../../types/common";
import { Pagination } from "@mui/material";
import { useCallback, useEffect } from "react";
import { fetchRoverPhotos } from "../../api/API";
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";

export const Content = () => {
  const roverPhotos = useAppSelector(state => state.roverPhotos);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { rover } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handleSetRoverPhotos = useCallback(async () => {
    const photosData = await fetchRoverPhotos({ rover: rover as string, page: page as string });
    dispatch(setPhotos(photosData))
  }, [dispatch, page, rover]);

  useEffect(() => {
    handleSetRoverPhotos();
  }, [page, rover, handleSetRoverPhotos]);

  const handleSelectRoverRoute = useCallback((e: React.SyntheticEvent, newRover: Rover) => {
    navigate(`rovers/${newRover}?page=1`);
  }, [navigate]);

  const handleChangePage = useCallback((e: React.ChangeEvent<unknown>, newPage: number) => {
    setSearchParams({ page: newPage.toString() })
  }, [setSearchParams]);

  return (
    <Grid
      size={11}
      sx={{
        backgroundColor: "#343232",
        borderRadius: "8px",
        margin: "0 0 8rem",
        padding: "3rem",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Tabs
          value={rover}
          onChange={handleSelectRoverRoute}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          sx={{
            padding: (theme) => `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`
          }}
        >
          <StyledTab label="Curiosity" value="curiosity" />
          <StyledTab label="Opportunity" value="opportunity" />
          <StyledTab label="Spirit" value="spirit" />
        </Tabs>
        <Pagination
          count={Object.keys(roverPhotos).length}
          // count={Math.ceil(Object.keys(roverPhotos).length / 10)}
          page={parseInt(page as string)}
          shape="rounded" 
          onChange={handleChangePage}
          sx={{
            "&.MuiPagination-root": {
              button: {
                color: "#F4EDED"
              },
            }
          }}
        />
      </Box>
      <Outlet />
    </Grid>
  );
};
