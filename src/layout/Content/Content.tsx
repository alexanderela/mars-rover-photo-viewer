import Grid from "@mui/material/Grid2";
import { Box, CircularProgress, Tabs } from "@mui/material";
import { StyledTab } from "./Content-styled";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { handleSetRoverPhotos } from "../../features/photos/PhotoViewer/photoViewerSlice";
import { Rover } from "../../types/common";
import { Pagination } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";

export const Content = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoading = useAppSelector(state => state.roverPhotos.isLoading);
  const totalPhotos = useAppSelector(state => state.roverPhotos.totalPhotos);
  const { rover } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handleSelectRoverRoute = useCallback((_e: React.SyntheticEvent, newRover: Rover) => {
    navigate(`rovers/${newRover}?page=1`);
  }, [navigate]);

  const handleChangePage = useCallback((_e: React.ChangeEvent<unknown>, newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  }, [setSearchParams]);

  useEffect(() => {
    dispatch(
      handleSetRoverPhotos({ rover: rover as Rover, page: page as string })
    );
  }, [dispatch, page, rover]);

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
      data-testid="Content"
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
          count={Math.ceil(totalPhotos / 25)}
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
      { isLoading ?
        <CircularProgress 
          color="primary" 
          size={60} 
          sx={{
            "& .MuiCircularProgress-circle": {
              color: "#B8B4B4"
            }
          }}
          data-testid="CircularProgressLoader"
        />
        :
        <Outlet />
      }
    </Grid>
  );
};
