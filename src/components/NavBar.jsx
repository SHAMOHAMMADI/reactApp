import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contextApp } from "../App";

function NavBar() {
  const { login, setIsLogin } = useContext(contextApp);

  const handleclick = () => {
    setIsLogin(!login);
  };
  return (
    <div className="flex flex-col items-center shadow-bottom-md border rounded-lg m-6 bg-gray-50 ">
      <ul className="flex justify-evenly lg:justify-start  w-9/12 [&>*]:mx-4 h-12 ms-8 items-center hover:[&>*]:text-blue-600 hover:[&>*]:font-bold hover:[&>*]:rounded-md">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/aboutus">aboutus</Link>
        </li>
        <li>
          <Link to="/contactus">contactus</Link>
        </li>
      </ul>
      <div>
        {login ? (
          <h4
            className="mx-2 my-3 px-2 py-1 rounded-md shadow-md hover:text-white cursor-pointer hover:bg-blue-600"
            onClick={handleclick}
          >
            user is entered
          </h4>
        ) : (
          <h4
            className="mx-2 my-3 px-2 py-1 rounded-md shadow-md hover:text-white cursor-pointer hover:bg-blue-600 "
            onClick={handleclick}
          >
            login
          </h4>
        )}
      </div>
      <div className="flex justify-between mb-4 [&>*]:mx-4 ">
        <button className='border px-4 py-1 rounded-md hover:bg-blue-800 hover:text-white'>
          <Link to="/register">
          Register
          </Link>
        </button>
        <button className='border px-4 py-1 rounded-md hover:bg-blue-800 hover:text-white'>
          <Link to="/login" >
          Login
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
