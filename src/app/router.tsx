import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { EnlargedPhotoViewer } from "../features/photos/EnlargedPhotoViewer";
import { Typography } from "@mui/material";

export const routesConfig = [
  {
    path: "/",
    lazy: async () => {
      const { default: App } = await import("./App");

      return {
        element: (
          <App />
        ),
      };
    },
    children: [
      {
        index: true,
        loader: async () => redirect("photos/rovers/curiosity?page=1")
      },
      {
        path: "photos/rovers/:rover",
        lazy: async () => {
          const { PhotoViewer } = await import("../features/photos/PhotoViewer");
    
          return {
            element: (
              <PhotoViewer />
            )
          };
        },
        children: [
          {
            path: "id/:id",
            element: <EnlargedPhotoViewer />
          },
        ]
      },
      {
        path: "favorites",
        lazy: async () => {
          const { FavoritesViewer } = await import("../features/favorites/FavoritesViewer");
    
          return {
            element: (
              <FavoritesViewer />
            )
          };
        },
        children: [
          {
            path: "id/:id",
            element: <EnlargedPhotoViewer />
          },
        ]
      },
      {
        path: "map",
        element: <Typography sx={{ color: "#F4EDED" }}>Coming Soon...</Typography>
      },
    ]
  },
];

export const router = createBrowserRouter(routesConfig);