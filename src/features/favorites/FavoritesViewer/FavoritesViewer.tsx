import Grid from "@mui/material/Grid2";
import { useAppSelector } from "../../../app/hooks";
import { Card } from "../../../components/Card";
import { memo } from "react";
import { RoverPhoto, RoverPhotoStateObj } from "../../../types/common";
import { Outlet } from "react-router-dom";

export const FavoritesViewer = memo(function FavoritesViewer() {
  const favoriteRoverPhotos = useAppSelector(state => {
    return Object.entries(state.roverPhotos.photos as RoverPhotoStateObj).filter((entry) => entry[1].isFavorite);
  });
  
  return (
    <Grid
      container
      direction='row'
      wrap="wrap"
      data-testid="FavoritesViewer"
      sx={{
        justifyContent: "center",
        margin: (theme) => `${theme.spacing(1)} ${theme.spacing(2)} 0`,
      }}
    >
      <Outlet />
      {
        favoriteRoverPhotos.map(([key, val]) => {
          return (
            <Card
              key={key}
              photo={val as RoverPhoto}
            />
          );
        })
      }
    </Grid>
  );
});