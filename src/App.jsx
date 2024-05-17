import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { animals, birds, fishes, insects } from "./animalList";
import Home from "./routes/Home";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import { useState } from "react";
import CategoryPage from "./routes/CategoryPage";
import SinglePage from "./routes/SinglePage";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (category, e) => {
    const searchTerm = e.target.value.toLowerCase();
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].filter((el) =>
        el.name.toLowerCase().includes(searchTerm)
      ),
    }));
    // setSearchTerm(searchTerm);
  };

  const likesHandler = (name, category, action) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].map((el) =>
        el.name === name
          ? { ...el, likes: el.likes + (action === "add" ? 1 : -1) }
          : el
      ),
    }));
  };
  const removeHandler = (name, category) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].filter((el) => el.name !== name),
    }));
  };

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
          element: (
            <CategoryPage
              addLikes={likesHandler}
              removeLike={likesHandler}
              removeCard={removeHandler}
              searchTerm={searchTerm}
              handleSerach={handleSearch( )}
              {...zoo}
            />
          ),
        },
        { path: "/:category/:name", element: <SinglePage {...zoo} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
