import Grid from "@mui/material/Grid2";
import { useAppSelector } from "../../../app/hooks";
import { Card } from "../../../components/Card"
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { RoverPhoto } from "../../../types/common";

export const PhotoViewer = () => {
  const roverPhotos = useAppSelector(state => state.roverPhotos);

  return (
    <Suspense fallback={<CircularProgress />}>
      <Grid
        container
        direction='row'
        wrap="wrap"
        sx={{

          justifyContent: "center",
          margin: (theme) => `${theme.spacing(1)} ${theme.spacing(2)} 0`,
        }}
      >
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
    </Suspense>
  )
}