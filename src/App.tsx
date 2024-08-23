import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page";
import BookPage from "./pages/book-page";
import ErrorPage from "./pages/error-page";
import { Path } from "./routes";

export const router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Path.BOOK,
    element: <BookPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
