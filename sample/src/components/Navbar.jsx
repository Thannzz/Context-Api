import React, { useContext } from "react";
import { Wishlist } from "./Wishlist";
import { Body } from "./Body";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

export const Navbar = () => {
  const { buy } = useContext(CartContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);
  const { isAuthorized, login, logout } = useContext(AuthContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorized) logout();
          else login("R", "Z");
        }}
      >
        {isAuthorized ? "Logout" : "Login"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "light"
      }`}</button>
      {isAuthorized && <Wishlist />}
      <Body />
    </div>
  );
};
