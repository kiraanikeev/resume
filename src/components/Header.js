import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="text_block">
        <h1 className="text_h1">Kirill Anikeev</h1>
        <div className="line"></div>
        <h2 className="text_h2">WEB DEVELOPER</h2>
      </div>
      <div className="grey_blocks">
        <p className="grey_block">Kazan</p>
        <p className="grey_block">Willing to relocate</p>
        <p className="grey_block">31 year</p>
      </div>
    </div>
  );
}

export default Header;
