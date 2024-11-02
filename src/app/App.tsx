import Grid from "@mui/material/Grid2";
import { Header } from "../layout/Header";
import { SideNav } from "../layout/SideNav";
import { Content } from "../layout/Content";
import "./App.css";

const App = () => {
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
        <Content />
      </Grid>
    </>
  );
};

export default App;
