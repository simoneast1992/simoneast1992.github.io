import React from 'react';

import data from '../../data.json';

import call from '../../images/call.svg';
import email from '../../images/email.svg';

class MobileNav extends React.Component {
    constructor(){
        super();

        this.handleMobileNavOpen = this.handleMobileNavOpen.bind(this);
        this.handleMobileNavClose = this.handleMobileNavClose.bind(this);

        this.state = {
            mobileNavOpen: false,
        }
    }

    handleMobileNavOpen = () => {
        this.setState({mobileNavOpen: true});
    }

    handleMobileNavClose = () => {
        this.setState({mobileNavOpen: false});
    }

    render() {
        return (
            <>
                <div className="hidden tablet-portrait:flex w-20 h-20 top-0 right-0 fixed items-center justify-center z-50 p-4" onClick={this.handleMobileNavOpen}>
                    <div className="menu-icon bg-gray-800 flex flex-col justify-around items-center py-3">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                {this.state.mobileNavOpen ?
                    <div className="fixed h-full w-screen p-8 flex flex-col items-center justify-center z-50 red-section">
                        <div className="close-button w-20 h-20 p-4 top-0 right-0 fixed flex items-center justify-center" onClick={this.handleMobileNavClose}>
                            <div className="close-icon bg-gray-800  relative">
                                <span className="transform rotate-45 absolute"/>
                                <span className="transform -rotate-45 absolute"/>
                            </div>
                        </div>
                        <a href="#" className="block w-full text-center px-4 py-8 text-3xl text-white cursor-pointer" onClick={this.handleMobileNavClose}>
                            Home
                        </a>
                        <a href="#about" className="block w-full text-center px-4 py-8 text-3xl text-white cursor-pointer" onClick={this.handleMobileNavClose}>
                            About Us
                        </a>
                        <a href="#work" className="block w-full text-center px-4 py-8 text-3xl text-white cursor-pointer" onClick={this.handleMobileNavClose}>
                            Our Work
                        </a>
                        <a href="#clients" className="block w-full text-center px-4 py-8 text-3xl text-white cursor-pointer" onClick={this.handleMobileNavClose}>
                            Clients
                        </a>
                        <span className="flex mt-8">
                            <a href={`tel:${data.footer.phone}`} className="px-4 py-2 mr-4">
                                <img src={call} alt="Call Icon" width="24" />
                            </a>
                            <a href={`mailto:${data.footer.email}`} className="px-4 py-2">
                                <img src={email} alt="Email Icon" width="24" />
                            </a>
                        </span>
                    </div>
                : null}
            </>
        )
    }
}

export default MobileNav;