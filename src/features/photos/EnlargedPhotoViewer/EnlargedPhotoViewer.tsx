import { Box, Dialog, useTheme } from "@mui/material";
import { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { RoverPhotoStateObj } from "../../../types/common";

export const EnlargedPhotoViewer = memo(function EnlargedPhotoViewer() {
  const theme = useTheme();
  const navigate = useNavigate();

  const { id } = useParams();
  const roverPhotos: RoverPhotoStateObj = useAppSelector(state => state.roverPhotos.photos);

  const parsedId = parseInt(id as string);

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Dialog 
      onClose={handleClose} 
      open={parsedId !== undefined}
      maxWidth="xl"
      sx={{
        "& .MuiDialog-paperWidthXl": {
          borderRadius: theme.spacing(1),
        }
      }}
      data-testid="EnlargedPhotoViewer"
    >
      <Box
        sx={{
          borderRadius: theme.spacing(1),
          height: theme.spacing(32),
          width: theme.spacing(50),
          backgroundImage: `url(${roverPhotos[parsedId].imgSrc})`,
          backgroundSize: "cover",
          cursor: "pointer",
        }}
      >{parsedId}</Box>
    </Dialog>
  );
});