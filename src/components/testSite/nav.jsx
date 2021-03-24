import React from 'react';

import logo from '../../images/logo-no-bg.png';

class Nav extends React.Component {
    render() {
        return (
            <>
                {this.props.color === 'white' ?
                    <nav className="w-auto h-24 absolute flex items-center justify-end p-8 top-0 right-0 tablet-portrait:hidden">
                        <a href="#" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-white cursor-pointer border-white border-b-2">
                            Home
                        </a>
                        <a href="#about" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-white cursor-pointer hover:border-white border-transparent border-b-2 transition duration-300 ease-in-out">
                            About Us
                        </a>
                        <a href="#work" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-white cursor-pointer hover:border-white border-transparent border-b-2 transition duration-300 ease-in-out">
                            Our Work
                        </a>
                        <a href="#clients" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-white cursor-pointer hover:border-white border-transparent border-b-2 transition duration-300 ease-in-out">
                            Clients
                        </a>
                    </nav>
                    :
                    <nav className="w-full h-24 fixed flex items-center justify-end p-8 top-0 right-0 bg-white border-b-2 border-gray-100 tablet-portrait:hidden">
                        <img src={logo} alt="SES Logo" width="150" className="mr-auto" />

                        <a href="#" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-gray-800 cursor-pointer border-transparent border-b-2 hover:border-red-500 transition duration-300 ease-in-out">
                            Home
                        </a>
                        <a href="#about" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-gray-800 cursor-pointer border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">
                            About Us
                        </a>
                        <a href="#work" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-gray-800 cursor-pointer hover:border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">
                            Our Work
                        </a>
                        <a href="#clients" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-gray-800 cursor-pointer hover:border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">
                            Clients
                        </a>
                    </nav>
                }
            </>
        )
    }
}

export default Nav;