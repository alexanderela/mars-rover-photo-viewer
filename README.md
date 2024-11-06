# mars-rover-photo-viewer
[![Netlify Status](https://api.netlify.com/api/v1/badges/0c9852f5-c77c-44ed-8ca7-3b5fa555a0b2/deploy-status)](https://app.netlify.com/sites/mars-rover-photo-viewer/deploys)

This project is a simple application to view photos from the different rovers on Mars.

## Project Setup

  * Clone down this repo and run `npm install`
  * Run `npm run dev` - visit `http://localhost:5173`

  ## Deployed App
[Mars Rover Photo Viewer Front End](https://mars-rover-photo-viewer.netlify.app/)

[Mars Rover Photo Viewer Back End](https://mars-rover-photo-viewer-be-f769ac5110ad.herokuapp.com)

#### Back End Repo
[Mars Rover Photo Viewer Back End](https://github.com/alexanderela/mars-rover-photo-viewer-backend)

## Iterations

### Iteration 0: Mockups and Basic Photo Viewer Dashboard
  * Create mockups.
  * Fetch and display photos from Mars rovers from most recent sol using NASA's [Mars Rover Photos API](https://api.nasa.gov/).
  * Display 25 photos at a time and integrate pagination with photo API requests.
  * Add Material UI components to improve user experience.
  * Implement global state using Redux to store rover selection, filters, and photos across application.

### Iteration 1: Advanced State Management, Filtering, & Performance Optimization
  * Implement lazy loading and memoization for photo galleries to optimize for larger datasets.
  * Allow users to click on individual photos and view enlarged photo in dialog.
  * Develop unit test suite for key components and API request files.

### Iteration 2: Backend API Integration and RESTful CRUD Operations
  * Build simple backend API using Node.js/Express to save, update, and delete user-selected photos (CRUD).
  * Provide endpoints for managing user’s collection of “favorite” photos.
  * Create UI for viewing, adding to, and managing favorites.
  * Extend test suite to cover interactions with backend, ensuring successful CRUD operations and handling of backend errors.

  ### Iteration 3: Filtering
  * Allow users to select which rover’s photos to view and filter by sol or Earth date.
  * Add filters for camera type (front, rear, panoramic), date range, and sorting option (sol and date)

### Extensions:
  * Use React Three Fiber to create a 3D Martian landscape, simulating the rover’s path with basic Martian terrain.
  * Add basic shaders to mimic Martian surface and lighting conditions, enhancing 3D experience.
  * Display rover path data on 3D map, allowing users to view rover locations and photos taken at each point.
  * Integrate user authentication via OAuth.


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
