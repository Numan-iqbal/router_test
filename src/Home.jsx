import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to={"/about"}>Go To About Page</NavLink>
    </div>
  );
};

export default Home;
