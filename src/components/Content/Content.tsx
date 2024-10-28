import Grid from "@mui/material/Grid2";
import { Box, Tabs } from "@mui/material";
import { StyledTab } from "./Content-styled";
import { GridView } from "../../features/GridView";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setSelectedRover } from "../../reducers/selectedRoverSlice";
import { Rover } from "../../types/common";
import { Pagination } from "@mui/material";
import { setPage } from "../../reducers/pageSlice";
import { useCallback, useEffect } from "react";
import { setPhotos } from "../../reducers/roverPhotosSlice";
import { fetchRoverPhotos } from "../../utils/API";


export const Content = () => {
  const page = useAppSelector(state => state.page);
  const roverPhotos = useAppSelector(state => state.roverPhotos);
  const selectedRover = useAppSelector(state => state.selectedRover);
  const dispatch = useAppDispatch();

  const handleSetRoverPhotos = useCallback(async () => {
    const photosData = await fetchRoverPhotos({ rover: selectedRover, page });
    dispatch(setPhotos(photosData.photos))
  }, [dispatch, page, selectedRover]);

  useEffect(() => {
    handleSetRoverPhotos();
  }, [page, selectedRover, handleSetRoverPhotos]);

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
          value={selectedRover}
          onChange={(e: React.SyntheticEvent, newRover: Rover) =>
            dispatch(setSelectedRover(newRover as Rover))
          }
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
          count={Math.ceil(roverPhotos.length / 10)}
          page={page}
          shape="rounded" 
          onChange={(e, newPage: number) => {
            dispatch(setPage(newPage));
          }}
          sx={{
            "&.MuiPagination-root": {
              button: {
                color: "#F4EDED"
              },
            }
          }}
        />
      </Box>
      <GridView
      />
    </Grid>
  );
};
