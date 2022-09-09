import FullComment from "./Components/FullComent/FullComment";
import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewCommentPage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/new-comment", element: <NewCommentPage /> },
  { path: "/comment/:id", element: <FullComment /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
