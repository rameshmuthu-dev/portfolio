import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { BsGrid } from "react-icons/bs";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="md:hidden fixed bottom-6 left-6 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-xl z-50"
        onClick={() => setOpen(true)}
      >
        <BsGrid size={22} />
      </button>

      {/* Overlay Background */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}

      {/* Bottom Sheet Menu */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 rounded-t-3xl p-6 shadow-xl z-50 md:hidden 
        transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Top Heading + Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <AiOutlineClose size={26} />
          </button>
        </div>

        {/* Menu Links Grid */}
        <div className="grid grid-cols-3 gap-6 text-center text-gray-800 dark:text-gray-300 pb-6">

          <a href="#about" onClick={() => setOpen(false)} className="flex flex-col items-center">
            <AiOutlineUser size={26} />
            <span className="text-sm mt-1">About</span>
          </a>

          <a href="#skills" onClick={() => setOpen(false)} className="flex flex-col items-center">
            <BiCategoryAlt size={26} />
            <span className="text-sm mt-1">Skills</span>
          </a>

          <a href="#projects" onClick={() => setOpen(false)} className="flex flex-col items-center">
            <MdWorkOutline size={26} />
            <span className="text-sm mt-1">Projects</span>
          </a>

          <a href="#contact" onClick={() => setOpen(false)} className="flex flex-col items-center">
            <AiOutlineMail size={26} />
            <span className="text-sm mt-1">Contact</span>
          </a>

          <a href="#home" onClick={() => setOpen(false)} className="flex flex-col items-center">
            <AiOutlineHome size={26} />
            <span className="text-sm mt-1">Home</span>
          </a>

        </div>
      </div>
    </>
  );
};

export default MobileMenu;
