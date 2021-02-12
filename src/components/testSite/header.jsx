import React from 'react';
import HeaderForm from './headerForm';

import arrow from '../../images/arrow.svg';
import logo from '../../images/logo-no-bg.png';

class Header extends React.Component {
    render() {
        return (
            <header className="w-screen h-screen flex items-center justify-center relative tracking-wide">
                <section className="w-1/3">
                    <img src={logo} alt="SES Logo" width="300" className="mb-8" />
                    <h1 className="text-9xl mb-8">Building Services</h1>
                    <h2 className="text-4xl text-gray-400 mb-12">All your building service needs...</h2>
                </section>

                <HeaderForm/>
                <div className="absolute w-full h-24 bg-white bottom-0 flex items-center justify-center">
                    <img src={arrow} alt="Arrow down" width="64px" height="64px" className="transform rotate-90 -mt-24 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                </div>
            </header>
        )
    }
}

export default Header;