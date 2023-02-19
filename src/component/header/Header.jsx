import React, { useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";
import logo from "../../assets/movix-logo.svg";
const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrooly, seiLastScrooly] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      <ContentWrapper>
        <div className="logo">
          <img src={logo} />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">Tv Shows</li>
          <li className="menuItem">
            <HiOutlineSearch />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch />

          {mobileMenu ? <VscChromeClose /> : <SlMenu />}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
