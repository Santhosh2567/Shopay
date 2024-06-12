import React, { useState } from "react";
import { cartimg, userLogo, Shopy } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productData = useSelector((state) => state.Shopay.productData.length);
  const userInfo = useSelector((state) => state.Shopay.userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] sticky top-0 z-50 border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <img className="w-20 sm:w-28" src={Shopy} alt="vyapar Logo" />
        </Link>
        <div className="hidden sm:flex sm:items-center sm:gap-8">
          <ul className="hidden sm:flex sm:items-center sm:gap-8">
            <li
              className="text-base text-black font-bold hover:text-orange-900 hover:underline
                     underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              <Link to="/">
              Home
              </Link>
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900 hover:underline
                     underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Pages
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900 hover:underline
                     underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Shop
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900 hover:underline
                     underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Element
            </li>
            <li
              className="text-base text-black font-bold hover:text-orange-900 hover:underline
                     underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Blog
            </li>
          </ul>

          <Link to="/cart">
            <div className="relative w-16">
              <img className="w-full h-auto" src={cartimg} alt="cart" />
              <span className="absolute top-5 left-8 w-2 text-sm text-center font-semibold">
                {productData}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo ? userInfo.image : userLogo}
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
        <div className="sm:hidden">
          <button
            aria-label="Open Menu"
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 p-4">
              <ul className="flex flex-col items-center space-y-4">
                <li className="text-lg font-bold text-gray-700">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-lg font-bold text-gray-700">
                  <Link to="/pages">Pages</Link>
                </li>
                <li className="text-lg font-bold text-gray-700">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="text-lg font-bold text-gray-700">
                  <Link to="/element">Element</Link>
                </li>
                <li className="text-lg font-bold text-gray-700">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="relative">
                  <Link to="/cart" className="flex items-center">
                    <img className="w-20 h-16" src={cartimg} alt="cart" />
                    <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white text-xs px-2 py-1">
                      {productData}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={userInfo ? userInfo.image : userLogo}
                      alt="userLogo"
                    />
                    {userInfo && (
                      <span className="ml-2 text-lg font-bold text-gray-700">
                        {userInfo.name}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
