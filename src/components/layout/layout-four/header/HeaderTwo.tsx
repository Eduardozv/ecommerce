"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SidebarCart from "../../../model/SidebarCart";
import MobileManuSidebar from "../../../model/MobileManuSidebar2";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { logout, setUserData } from "@/store/reducers/registrationSlice";
import { setSearchTerm } from "@/store/reducers/filterReducer";

function HeaderTwo({ cartItems, wishlistItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const { searchTerm } = useSelector((state: RootState) => state.filter);
  const [searchInput, setSearchInput] = useState(searchTerm || "");

  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMainMenu = (menuKey: any) => {
    setActiveMainMenu((prevMenu) => (prevMenu === menuKey ? null : menuKey));
    closeMobileManu();
  };

  const openMobileManu = () => {
    setIsMobileMenuOpen((prev: any) => !prev);
  }

  const closeMobileManu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const userdata = localStorage.getItem("login_user") ?? "";
    const user = userdata !== "" ? JSON.parse(userdata) : null;
    dispatch(setUserData({ isAuthenticated: userdata !== "", user }));
  }, [dispatch]);

  const handleSearch = (event: any) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchTerm(searchInput));
    router.push("/shop-full-width-col-4");
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("login_user");
    dispatch(logout());
    router.push("/");
  };

  return (
    <>
      <div className="gi-header-bottom d-lg-block">
        <div className="container position-relative">
          <div className="row">
            <div className="gi-flex">
            <Link
              onClick={openMobileManu}
              href=""
              className="gi-header-btn gi-site-menu-icon d-lg-none"
            >
              <i className="fi-rr-menu-burger"></i>
            </Link>


              {/* <!-- Header Logo Start --> */}
              <div className="align-self-center gi-header-logo">
                <div className="header-logo">
                  <Link href="/ga">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL +
                        "/assets/img/logo/logo-blanco.png"
                      }
                      alt="Site Logo"
                    />
                  </Link>
                </div>
              </div>
              {/* <!-- Header Logo End -->
                        <!-- Header Search Start --> */}
              {/* <div className="align-self-center gi-header-search">
                <div className="header-search">
                  <form
                    onSubmit={handleSubmit}
                    className="gi-search-group-form"
                    action="#"
                  >
                    <input
                      className="form-control gi-search-bar"
                      placeholder="Search Products..."
                      type="text"
                      value={searchInput}
                      onChange={handleSearch}
                    />
                    <button className="search_submit" type="submit">
                      <i className="fi-rr-search"></i>
                    </button>
                  </form>
                </div>
              </div> */}
              {/* <!-- Header Search End -->
                        <!-- Header Button Start --> */}

            </div>
          </div>
        </div>
      </div>
      <SidebarCart isCartOpen={isCartOpen} closeCart={closeCart} />
      <MobileManuSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileManu={closeMobileManu}
        toggleMainMenu={toggleMainMenu}
        activeMainMenu={activeMainMenu}
      />
    </>
  );
}

export default HeaderTwo;
