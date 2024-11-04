import { Box, useTheme } from "@mui/material";
import { RoverPhoto } from "../../types/common";
import { memo, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface CardProps {
  photo: RoverPhoto;
}

export const Card = memo(function Card({ photo }: CardProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handleCardClick = useCallback(() => {
    navigate(`id/${photo.id}?page=${parseInt(page as string)}`);
  }, [navigate, page, photo.id]);

  return (
    <Box
      onClick={handleCardClick}
      sx={{
        borderRadius: theme.spacing(1),
        boxShadow: `0px 0px 0px ${theme.spacing(0.25)} white inset`,
        height: theme.spacing(18.8525),
        width: theme.spacing(25),
        margin: `${theme.spacing(1)} ${theme.spacing(2)}`,
        backgroundImage: `url(${photo.imgSrc})`,
        backgroundSize: "cover",
        cursor: "pointer"
      }}
      data-testid="Card"
    />
  );
});