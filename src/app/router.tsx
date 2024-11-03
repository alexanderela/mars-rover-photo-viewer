import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { EnlargedPhotoViewer } from "../features/EnlargedPhotoViewer";

export const routesConfig = [
  {
    path: "/",
    lazy: async () => {
      const { default: App } = await import("./App");

      return {
        element: (
          <App />
        ),
      }
    },
    children: [
      {
        index: true,
        loader: async () => redirect("rovers/curiosity?page=1")
      },
      {
        path: "rovers/:rover",
        lazy: async () => {
          const { PhotoViewer } = await import("../features/photos/PhotoViewer");
    
          return {
            element: (
              <PhotoViewer />
            )
          }
        },
        children: [
          {
            path: "id/:id",
            element: <EnlargedPhotoViewer />
          }
        ]
      },
    ]
  },
];

export const router = createBrowserRouter(routesConfig);