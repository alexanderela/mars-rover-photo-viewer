import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Landing = () => {
  return (
    <Grid
      size={12}
      sx={{
        // height: "7rem",
      }}
    >
      <Button
        href="rovers/curiosity"
      >
        Enter
      </Button>
    </Grid>
  );
};
