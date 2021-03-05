import React from 'react';
import data from '../../data.json';

import logo from '../../images/logo-white.png';

class Footer extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center bg-gray-800 text-white">
                <div className="section-inner flex items-stretch">
                    <div className="section-inner-half">
                        <h3 className="text-6xl mb-12 laptop-m:text-5xl">{data.footer.title}</h3>
                        <p className="text-lg text-white">
                            {data.footer.text}
                            <br/><br/>
                            <span className="montserrat mb-4">Phone<span className="ml-4">{data.footer.phone}</span></span>
                            <br/>
                            <span className="montserrat">Email<span className="ml-4">{data.footer.email}</span></span>
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
                        <span className="montserrat mt-auto text-lg">Vat Number<span className="ml-4">{data.footer.vat}</span></span>
                        <span className="montserrat mb-8 text-lg">Company Number<span className="ml-4">{data.footer.company}</span></span>
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