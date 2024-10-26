import Grid from "@mui/material/Grid2";

export const GridView = () => {
  return (
    <Grid
      sx={{
        height: "100%",
        border: '1px solid white',
        margin: (theme) => `${theme.spacing(1)} ${theme.spacing(2)}`,
      }}
    ></Grid>
  );
};
