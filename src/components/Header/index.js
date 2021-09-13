import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Directory of Employees</h1>
      <p className="text-center">
        Click column headers to sort or use search box.
      </p>
    </header>
  );
};

export default Header;
