import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTab = styled(Tab)({
  "&.Mui-focused": {
    outline: "none",
  },
  "&.Mui-selected": {
    color: "#F4EDED",
    fontWeight: 600,
    outline: "none",
  },
  "&:hover": {
    color: "#E36414",
    outline: "none",
  },
  color: "#B8B4B4",
});
