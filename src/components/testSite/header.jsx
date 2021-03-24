import React from 'react';
import HeaderForm from './headerForm';

import arrow from '../../images/arrow.svg';
import logo from '../../images/logo-no-bg.png';

class Header extends React.Component {
    render() {
        return (
            <header className="header w-full flex items-stretch justify-center relative brick-bg tablet-portrait:flex-col z-40">
                <div className="w-1/2 tablet-portrait:w-full flex items-center justify-center p-10 tablet-portrait:py-16 mobile-l:p-8">
                    <div className="w-min tablet-portrait:w-3/4 mobile-l:w-full h-auto flex items-start justify-center flex-col">
                        <img src={logo} alt="SES Logo" className="mb-8 header-logo" />
                        <h1 className="text-9xl mb-8 text-gray-800 laptop-l:text-8xl laptop-s:text-7xl ipad-landscape:text-6xl tablet-portrait:text-7xl mobile-l:text-6xl iphone-x:text-5xl">{this.props.title}</h1>
                        <h2 className="text-3xl text-gray-600 laptop-m:text-2xl laptop-s:text-xl ipad-landscape:text-lg tablet-portrait:text-2xl iphone-x:text-xl">{this.props.subtitle}</h2>
                    </div>
                </div>
                <div className="header-form-wrapper w-1/2 tablet-portrait:w-full flex items-center justify-center relative tablet-portrait:p-16 mobile-l:p-8 mobile-l:pb-16" id="form">
                    {this.props.children}
                    <HeaderForm/>
                </div>
                <div className="absolute w-24 h-24 rounded-full bg-white left-12 bottom-12 flex items-center justify-center cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out laptop-s:w-16 laptop-s:h-16 tablet-portrait:hidden">
                    <a href="#about">
                        <img src={arrow} alt="Arrow down" className="down-arrow transform rotate-90" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;