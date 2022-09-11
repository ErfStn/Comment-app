import FullComment from "./Components/FullComent/FullComment";
import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewCommentPage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/new-comment", element: <NewCommentPage />, id: 1 },
  { path: "/comment/:id", element: <FullComment />, id: 2 },
  { path: "/", element: <HomePage />, id: 3 },
  { path: "*", element: <NotFound />, id: 4 },
];
export default routes;
