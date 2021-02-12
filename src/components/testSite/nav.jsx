import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav className="w-screen h-24 fixed flex items-center justify-end p-8 z-50">
                <a href="#" className="block px-4 py-2 mr-4 text-lg text-gray-800 cursor-pointer border-red-500 border-b-2">Home</a>
                <a href="#" className="block px-4 py-2 mr-4 text-lg text-gray-400 hover:text-gray-800 cursor-pointer hover:border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">About Us</a>
                <a href="#" className="block px-4 py-2 mr-4 text-lg text-gray-400 hover:text-gray-800 cursor-pointer hover:border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">Our Work</a>
                <a href="#" className="block px-4 py-2 mr-4 text-lg text-gray-400 hover:text-gray-800 cursor-pointer hover:border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">Clients</a>
            </nav>
        )
    }
}

export default Nav;