import React from "react";

const Navbar = () => {
    return (
        <div className="shadow-xl fixed top-0 w-full flex z-50 bg-white text-2xl py-4 px-8">
            <span className="font-bold">
                <span className="text-cyan-600 text-3xl"> Smart </span>
                <span className="font-light"> Printers </span>
            </span>
            <button className="ml-auto bg-cyan-600 hover:bg-cyan-800 shadow-md hover:shadow-none text-white text-lg font-semibold py-2 px-4 rounded-lg">
                Logout
            </button>
        </div>
    );
};

export default Navbar;
