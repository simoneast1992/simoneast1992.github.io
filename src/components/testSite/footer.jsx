import React from 'react';

import logo from '../../images/logo-white.png';

class Footer extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center bg-gray-800 text-white">
                <div className="section-inner flex items-stretch">
                    <div className="section-inner-half">
                        <h3 className="text-6xl mb-12">Get in touch</h3>
                        <p className="text-lg text-white">
                            If you have any queries or questions however big or small don't hesitate to get in touch by phone, email or using the contact form. We will get back to you as soon as possible.
                            <br/><br/>
                            <span className="montserrat mb-4">Phone<span className="text-xl ml-4">070976 754849</span></span>
                            <br/>
                            <span className="montserrat">Email<span className="text-xl ml-4">neil@sesbs.co.uk</span></span>
                            <br/><br/>
                            <a href="#">
                                <div className="p-4 montserrat bg-gray-700 w-min rounded-xl hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out">
                                    Contact&nbsp;Form
                                </div>
                            </a>
                        </p>
                    </div>
                    <div className="section-inner-half flex flex-col items-end justify-between">
                        <img src={logo} alt="SES Logo" width="300" />
                        <span className="flex">
                            <a href="#">
                                <div className="p-4 mr-4 montserrat bg-gray-700 w-min rounded-xl hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out">
                                    Privacy&nbsp;Policy
                                </div>
                            </a>
                            <a href="#">
                                <div className="p-4 mr-4 montserrat bg-gray-700 w-min rounded-xl hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out">
                                    Site&nbsp;Map
                                </div>
                            </a>
                            <a href="#">
                                <div className="p-4 montserrat bg-gray-700 w-min rounded-xl hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out">
                                    Cookies
                                </div>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;