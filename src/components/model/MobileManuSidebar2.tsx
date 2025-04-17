import React, { useState } from "react";
import Link from "next/link";
import constants from "@/utility/constants";

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
                  <Link href="blogs" onClick={() => toggleMainMenu("blog")} >
                    Noticias
                  </Link>
                </li>
                <li className="dropdown">
                  <Link href="/quienes-somos" onClick={() => toggleMainMenu("pages")} >
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
                      <Link href={constants.facebookUrl}>
                        <i className="gicon gi-facebook"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href={constants.instagramUrl}>
                        <i className="gicon gi-instagram"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href={constants.linkedinUrl}>
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
