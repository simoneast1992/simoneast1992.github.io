import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <>
                {this.props.background === 'red' ?
                    <nav className="w-100 h-24 absolute flex items-center justify-end p-8 bg-red-500 top-0 right-0">
                        <a href="#" className="block px-4 py-2 mr-4 text-lg text-white cursor-pointer border-white border-b-2">
                            Home
                        </a>
                        <a href="#" className="block px-4 py-2 mr-4 text-lg text-white cursor-pointer hover:border-white border-transparent border-b-2 transition duration-300 ease-in-out">
                            About Us
                        </a>
                        <a href="#" className="block px-4 py-2 mr-4 text-lg text-white cursor-pointer hover:border-white border-transparent border-b-2 transition duration-300 ease-in-out">
                            Our Work
                        </a>
                        <a href="#" className="block px-4 py-2 mr-4 text-lg text-white cursor-pointer hover:border-white border-transparent border-b-2 transition duration-300 ease-in-out">
                            Clients
                        </a>
                    </nav>
                    :
                    <nav className="w-screen h-24 fixed flex items-center justify-end p-8 top-0 right-0">
                        <a href="#" className="block px-4 py-2 mr-4 text-lg text-gray-800 cursor-pointer border-gray-800 border-b-2">
                            Home
                        </a>
                        <a href="#" className="block px-4 py-2 mr-4 text-lg text-gray-800 cursor-pointer hover:border-gray-800 border-transparent border-b-2 transition duration-300 ease-in-out">
                            About Us
                        </a>
                        <a href="#" className="block px-4 py-2 mr-4 text-lg text-gray-800 cursor-pointer hover:border-gray-800 border-transparent border-b-2 transition duration-300 ease-in-out">
                            Our Work
                        </a>
                        <a href="#" className="block px-4 py-2 mr-4 text-lg text-gray-800 cursor-pointer hover:border-gray-800 border-transparent border-b-2 transition duration-300 ease-in-out">
                            Clients
                        </a>
                    </nav>
                }
            </>
        )
    }
}

export default Nav;