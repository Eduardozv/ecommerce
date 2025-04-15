import React, { useState } from "react";
import classic from "../../utility/header/classic";
import Link from "next/link";
import home from "../../utility/header/home";
import banner from "../../utility/header/benner";
import column from "../../utility/header/columns";
import list from "../../utility/header/list";
import blog from "../../utility/header/blog";
import pages from "../../utility/header/pages";
import SmoothCollapse from "react-smooth-collapse";

const MobileManuSidebar = ({ isMobileMenuOpen, closeMobileManu, toggleMainMenu, activeMainMenu }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (submenu: string) => {
    setActiveSubMenu((prevSubMenu) => (prevSubMenu === submenu ? null : submenu));
  };

  return (
    <>
      <div
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
        onClick={closeMobileManu}
        className="gi-mobile-menu-overlay"
      ></div>
      {isMobileMenuOpen && (
        <div id="gi-mobile-menu" className="gi-mobile-menu gi-menu-open">
          <div className="gi-menu-title">
            <span className="menu_title">Menu</span>
            <button onClick={closeMobileManu} className="gi-close-menu">
              ×
            </button>
          </div>
          <div className="gi-menu-inner">
            <div className="gi-menu-content">
              <ul>
                <li className={`dropdown drop-list ${activeMainMenu ? "active" : ""}`}>
                  <Link
                    href="/ga"
                    onClick={() => toggleMainMenu('home')}
                    className="dropdown-arrow"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tienda" onClick={() => toggleMainMenu('Tienda')}>
                    Tienda
                  </Link>
                </li>
                <li className="dropdown">
                  <Link onClick={() => toggleMainMenu("blog")} href="blogs">
                    Noticias
                  </Link>
                </li>
                <li className="dropdown">
                  <Link onClick={() => toggleMainMenu("pages")} href="quienes-somos">
                    Empresa
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-res-lan-curr">
              {/* <!-- Social Start --> */}
              <div className="header-res-social">
                <div className="header-top-social">
                  <ul className="mb-0">
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="gicon gi-facebook"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="gicon gi-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="gicon gi-instagram"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="gicon gi-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Social End --> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileManuSidebar;
