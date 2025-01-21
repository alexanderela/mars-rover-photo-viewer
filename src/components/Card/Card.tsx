import { MouseEvent } from "react";
import { Box, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RoverPhoto } from "../../types/common";
import { memo, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleToggleRoverPhotoFavorites } from "../../features/photos/PhotoViewer/photoViewerSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { StyledFavoriteButton } from "./Card-styled";

interface CardProps {
  photo: RoverPhoto;
}

export const Card = memo(function Card({ photo }: CardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleFavorite = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    dispatch(
      handleToggleRoverPhotoFavorites(photo)
    );
  }, [dispatch, photo]);

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
        cursor: "pointer",
        position: "relative",
        zIndex: 1
      }}
      data-testid="Card"
    >
      <StyledFavoriteButton 
        aria-label="favorite"
        data-testid="favorite"
        id="favorite"
        onClick={(e) => handleToggleFavorite(e)}
      >
        { 
          photo.isFavorite ? 
            <FavoriteIcon data-testid="favorite" /> : 
            <FavoriteBorderIcon data-testid="favorite" /> 
        }
      </StyledFavoriteButton>
    </Box>
  );
});