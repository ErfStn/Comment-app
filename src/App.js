import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

const App = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
