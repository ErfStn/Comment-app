import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const items = [
    { name: "Home", to: "/" },
    { name: "New comment", to: "/new-comment" },
  ];

  return (
    <nav className="navBar">
      <ul className="links">
        {items.map((item) => {
          return (
            <li key={item.to} className="tagLink">
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "activeLink" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
