import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <div>

      <nav className=" bg-primary mx-1 my-3 box-border flex justify-between md:items-center flex-wrap p-2">
        <h2 className="text-2xl inline md:text-3xl text-white font-bold font-hanuman ">
          Portfolio
        </h2>
        <div
          className={
            togglerNav ? "flex flex-col md:inline" : "hidden md:inline"
          }
        >
          <NavLink className="btn" onClick={clickHandler} to="/">
            Home
          </NavLink>
          <NavLink className="btn" onClick={clickHandler} to="/about">
            About
          </NavLink>
          <NavLink className="btn" onClick={clickHandler} to="/services">
            Services
          </NavLink>
          <NavLink className="btn" onClick={clickHandler} to="/project">
            Projects
          </NavLink>
          <NavLink className="btn" onClick={clickHandler} to="/contact">
            Contact
          </NavLink>
        </div>
        <button
          className=" text-3xl inline md:hidden self-start text-secondary outline-none "
          onClick={clickHandler}
        >
          {togglerNav ? <AiOutlineClose /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
