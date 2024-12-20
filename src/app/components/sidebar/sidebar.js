"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import {
  PiArrowsInLineHorizontalFill,
  PiArrowsOutLineHorizontalFill,
} from "react-icons/pi";
import { CiGrid42 } from "react-icons/ci";
import {  MdSupportAgent } from "react-icons/md";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const whenActive = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setIsSidebarOpen(false);
      } else if (window.innerWidth >= 1280) {
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isSidebarVisible]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLinkClick = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  };

  const mainNavlink = [
    {
      name: "Leads",
      icon: <CiGrid42 size="20" />,
      path: "/",
    },
    {
      name: "Agent Skill",
      icon: <MdSupportAgent size="20" />,

      path: "../../components/agent",
    },
  ];

  return (
    <div>
      {/* Hamburger Menu */}
      <button
        className="md:hidden p-2 text-black top-2 left-1 z-50 fixed"
        onClick={toggleMobileSidebar}>
        {isSidebarVisible ? "" : <FiMenu size={24} />}
      </button>

      {/* Backdrop when sidebar is open */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-50 border-r  border top-0 h-full md:h-screen py-5 px-2 transition-all duration-300 z-40 overflow-y-auto fixed md:sticky
          ${isSidebarOpen ? "w-[270px]" : "w-[90px]"} 
          ${isSidebarVisible ? "block left-0 w-[270px] h-[100vh]" : "hidden"} 
          md:block md:relative`}>
        <div className="flex flex-col justify-between h-full">
          <div>
           

            {/* Main Nav List */}
            <div className="flex flex-col gap-2">
              {mainNavlink.map((item, index) => {
                const isActive = whenActive === item.path;
                return (
                  <div key={index}>
                    <div
                      className={`flex items-center justify-between gap-4 p-2 rounded group cursor-pointer ${
                        isActive
                          ? "bg-gray-300 hover:text-white"
                          : "hover:bg-gray-500 hover:text-white"
                      }`}>
                      <Link
                        href={item.path}
                        className="flex items-center gap-2 flex-grow"
                        onClick={handleLinkClick}>
                        <div
                          className={`  ${
                            isActive ? "text-black" : "text-black "
                          }`}>
                          {item.icon}
                        </div>
                        <p
                          className={`text-sm ${
                            isSidebarOpen ? "block" : "hidden"
                          } ${isActive ? "text-black" : "text-black "} hover:text-white`}>
                          {item.name}
                        </p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Collapse/Expand Button */}
          <div className="mt-6">
            <button
              onClick={toggleSidebar}
              className="flex items-center gap-2 p-2 rounded group cursor-pointer  w-full text-black hover:text-black">
              {isSidebarOpen ? (
                <>
                  <PiArrowsInLineHorizontalFill
                    size={20}
                    className="text-black"
                  />
                  <p className="text-sm text-black group-hover:text-black">
                    Collapse
                  </p>
                </>
              ) : (
                <PiArrowsOutLineHorizontalFill
                  size={20}
                  className="text-black"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
