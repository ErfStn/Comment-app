import Footer from "./Footer";
import NavigationBar from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
