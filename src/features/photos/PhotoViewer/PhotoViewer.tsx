import Grid from "@mui/material/Grid2";
import { useAppSelector } from "../../../app/hooks";
import { Card } from "../../../components/Card"
import { memo } from "react";
import { RoverPhoto } from "../../../types/common";
import { Outlet } from "react-router-dom";

export const PhotoViewer = memo(function PhotoViewer() {
  const roverPhotos = useAppSelector(state => state.roverPhotos.photos);

  return (
    <Grid
      container
      direction='row'
      wrap="wrap"
      sx={{

        justifyContent: "center",
        margin: (theme) => `${theme.spacing(1)} ${theme.spacing(2)} 0`,
      }}
    >
      <Outlet />
      {
        Object.entries(roverPhotos).map(([key, val]) => {
          return (
            <Card
              key={key}
              photo={val as RoverPhoto}
            />
          )
        })
      }
    </Grid>
  )
});