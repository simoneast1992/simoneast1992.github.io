import React from 'react';
import data from '../../data.json';

import logo from '../../images/logo-no-bg.webp';
import call from '../../images/call.svg';
import email from '../../images/email.svg';
import callB from '../../images/call-b.svg';
import emailB from '../../images/email-b.svg';

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
                        <a href={`tel:${data.footer.phone}`} className="px-4 py-2 mr-4 ipad-landscape:hidden">
                            <img src={call} alt="Call Icon" width="16" />
                        </a>
                        <a href={`mailto:${data.footer.email}`} className="px-4 py-2 ipad-landscape:hidden">
                            <img src={email} alt="Email Icon" width="16" />
                        </a>
                    </nav>
                    :
                    <nav className="w-full h-24 fixed flex items-center justify-end p-8 top-0 right-0 bg-white border-b-2 border-gray-300 tablet-portrait:hidden z-30">
                        <img src={logo} alt="SES Logo" width="150" height="56" className="mr-auto" />

                        <a href="#" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-gray-800 cursor-pointer border-transparent border-b-2 hover:border-red-500 transition duration-300 ease-in-out">
                            Home
                        </a>
                        <a href="#about" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-gray-800 cursor-pointer hover:border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">
                            About Us
                        </a>
                        <a href="#work" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-gray-800 cursor-pointer hover:border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">
                            Our Work
                        </a>
                        <a href="#clients" className="block px-4 py-2 mr-4 text-lg laptop-xs:text-base text-gray-800 cursor-pointer hover:border-red-500 border-transparent border-b-2 transition duration-300 ease-in-out">
                            Clients
                        </a>
                        <a href={`tel:${data.footer.phone}`} className="px-4 py-2 mr-4">
                            <img src={callB} alt="Call Icon" width="16" />
                        </a>
                        <a href={`mailto:${data.footer.email}`} className="px-4 py-2">
                            <img src={emailB} alt="Email Icon" width="16" />
                        </a>
                    </nav>
                }
            </>
        )
    }
}

export default Nav;