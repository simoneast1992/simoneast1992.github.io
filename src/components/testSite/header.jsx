import React from 'react';
import HeaderForm from './headerForm';

import arrow from '../../images/arrow.svg';
import logo from '../../images/logo-no-bg.png';

class Header extends React.Component {
    render() {
        return (
            <header className="w-full h-screen flex items-center justify-center tracking-wide relative z-10">
                <div className="w-1/2 h-screen flex items-center justify-center p-10">
                    <div className="w-min h-auto flex items-start justify-center flex-col">
                        <img src={logo} alt="SES Logo" width="300" className="mb-8" />
                        <h1 className="text-9xl mb-8 text-gray-800">{this.props.title}</h1>
                        <h2 className="text-3xl text-gray-600">{this.props.subtitle}</h2>
                    </div>
                </div>
                <div className="w-1/2 h-screen flex items-center justify-center bg-red-500 relative">
                    {this.props.children}
                    <HeaderForm/>
                </div>
                <div className="absolute w-24 h-24 rounded-full bg-white left-12 bottom-12 flex items-center justify-center cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out">
                    <img src={arrow} alt="Arrow down" width="48px" height="48px" className="transform rotate-90" />
                </div>
            </header>
        )
    }
}

export default Header;