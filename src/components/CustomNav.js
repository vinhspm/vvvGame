import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/style.css";

const menuStyle = {
  "padding-top": "11px",
};
const linkStyle = {
  "padding-bottom": "14px",
  "text-decoration": "none",
  color: "#008aa4",
  "font-family": "Arial,sans-serif",
  "font-weight": "bold",
  "margin-left": "30px",
};
const linkActiveStyle = {
  "border-bottom": "4px solid #008aa4",
};
const basicSearch = {
  "border-radius": "35px",
  'box-shadow': '0 8px 20px 0 rgb(0 0 0 / 15%)',
  'box-sizing': 'border-box',
  'display': 'block',
  'position': 'absolute',
  'right': '250px',
  'height': '35px',
  'margin-top': '7.5px'
}
const inputField = {
  'position': "relative",
  "box-sizing": "border-box",
  'width': '100%',
  'height':'100%',
  "border-radius": "35px",

};
const search = {
  padding: "10px 80px 10px 40px",
  border: "0",
  width: "100%",
  color: "#fff",
  'background':
    "linear-gradient(to right, #2c6dd5 0%, #2c6dd5 28%, #ff4b5a 91%, #ff4b5a 100%)",
  height: "100%",
  "border-radius": "35px",
  

};
const iconWrap = {
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  "align-items": "center",
  width: "60px",
  height: "100%",
};
const loginIconWrap = {
  position: "absolute",
  top: "0",
  right: "150px",
  display: "flex",
  "align-items": "center",
  width: "60px",
  height: "50px",
  
}
const cartIconWrap = {
  position: "absolute",
  top: "0",
  right: "80px",
  display: "flex",
  "align-items": "center",
  width: "60px",
  height: "50px",
  
}
const CustomNav = () => {
  return (
    <nav className="bg-dark pl-5 d-flex ">
      <Link to="/home">
        <img src="logo.png" width="150px" height="50px" />
      </Link>
      <div className="menu" style={menuStyle}>
        <NavLink
          exact
          activeStyle={linkActiveStyle}
          style={linkStyle}
          to="/video-games"
        >
          VIDEO GAMES
        </NavLink>
        <NavLink
          exact
          activeStyle={linkActiveStyle}
          style={linkStyle}
          to="/dlc"
        >
          DLC
        </NavLink>
      </div>
      <div style={basicSearch}>
        <div style={inputField}>
          <input style={search} id="search-input"placeholder="Search for more games" />
          <div style={iconWrap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="iconWrap" style={loginIconWrap}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 500 500">
            <path d="M250.008 0C111.92 0 0 111.933 0 250c0 68.4 27.518 130.333 72.036 175.467l-.017.133h.117A249.225 249.217 0 0 0 250.008 500C388.08 500 500 388.067 500 250S388.08 0 250.008 0m0 21.667C375.93 21.667 478.35 124.1 478.35 250c0 57.167-21.267 109.35-56.102 149.433C393.18 335.6 326.594 294.55 251.058 294.55c-76.502 0-143.888 42.083-171.905 106.417C43.5 360.667 21.667 307.9 21.667 250c0-125.9 102.437-228.333 228.341-228.333M95.437 417.583a44.168 44.167 0 0 1 2.4-5.533c24.217-57.3 85.802-95.817 153.205-95.817 67.402 0 128.97 38.517 152.938 95.1.05.1.983 2.8 1.633 5.284-40.8 38.15-95.453 61.733-155.605 61.733-59.652 0-113.853-23.183-154.571-60.767M250.008 274.05a95.303 95.3 0 0 1-95.186-95.183 95.32 95.317 0 0 1 95.186-95.184 95.303 95.3 0 0 1 95.17 95.184 95.303 95.3 0 0 1-95.17 95.183m0-168.683a73.586 73.583 0 0 0-73.502 73.5 73.586 73.583 0 0 0 73.502 73.5 73.586 73.583 0 0 0 73.503-73.5 73.602 73.6 0 0 0-73.503-73.5" fill="#0089a3"></path>
          </svg>
      </div>
      <div className="iconWrap" style={cartIconWrap}>
        <span id="cart-number">0</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 500 500">
          <path d="M202.265 500a42.985 42.985 0 1 1 42.985-42.985A43.152 43.152 0 0 1 202.265 500zm0-69.143a26.158 26.158 0 1 0 26.158 26.158 26.158 26.158 0 0 0-26.158-25.658zM394.532 500a42.985 42.985 0 1 1 42.985-42.985A42.985 42.985 0 0 1 394.532 500zm0-69.143a26.158 26.158 0 1 0 26.158 26.158 26.158 26.158 0 0 0-26.158-25.658zM435.018 279.576h-273.24l-28.656-134.287h340.05l-22.16 122.458zm.833 88.47H188.77a24.492 24.492 0 0 1-24.158-19.16L90.303 10.001a8.497 8.497 0 0 1 6.498-9.83 8.497 8.497 0 0 1 9.996 6.497l74.142 338.884a7.83 7.83 0 0 0 7.83 5.998h247.082a8.33 8.33 0 0 1 8.33 8.497 8.33 8.33 0 0 1-8.33 7.997zm-.833-79.973h-273.24a8.33 8.33 0 0 1-8.33-8.497 8.33 8.33 0 0 1 8.33-8.33h273.24a8.664 8.664 0 0 0 7.83-5.999l35.988-155.946H124.791a8.497 8.497 0 0 1-8.164-9.164 8.33 8.33 0 0 1 8.497-8.33h363.709a8.33 8.33 0 0 1 8.497 8.33v2.666a7.497 7.497 0 0 1 0 1.833l-37.987 164.443a2.333 2.333 0 0 1 0 1 25.658 25.658 0 0 1-24.325 17.994zM95.301 16.833H10.997A8.33 8.33 0 0 1 2.5 8.503 8.497 8.497 0 0 1 10.997.171h84.304a8.33 8.33 0 0 1 8.33 8.497 8.33 8.33 0 0 1-8.33 8.164z" fill="#0089a3"></path>
        </svg>
      </div>
    </nav>
  );
};
export default CustomNav;
