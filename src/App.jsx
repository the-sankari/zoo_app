import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { animals, birds, fishes, insects } from "./animalList";
import Home from "./routes/Home";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import { useState } from "react";
import CategoryPage from "./routes/CategoryPage";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ":category",
          element: <CategoryPage {...zoo} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
