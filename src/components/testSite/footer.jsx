import React from 'react';
import data from '../../data.json';

import logo from '../../images/logo-white.webp';

class Footer extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center bg-gray-800 text-white px-16 tablet-portrait:px-0">
                <div className="section-inner flex items-stretch mobile-l:flex-col">
                    <div className="section-inner-half">
                        <h3 className="text-6xl mb-12 laptop-m:text-5xl mobile-l:text-4xl">{data.footer.title}</h3>
                        <p className="text-lg text-white mobile-l:text-base">
                            {data.footer.text}
                            <br/><br/>
                            <a href={`tel:${data.footer.phone}`}>
                                <span className="montserrat mb-4">Phone<span className="ml-4">{data.footer.phone}</span></span>
                            </a>
                            <br/>
                            <a href={`mailto:${data.footer.email}`}>
                                <span className="montserrat">Email<span className="ml-4">{data.footer.email}</span></span>
                            </a>
                            <br/><br/>
                            <a href="#form">
                                <div className="p-4 montserrat bg-gray-700 w-min rounded-xl hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out mobile-l:mb-12 mobile-l:text-sm">
                                    Contact&nbsp;Form
                                </div>
                            </a>
                        </p>
                    </div>
                    <div className="section-inner-half flex flex-col items-end mobile-l:items-start justify-between">
                        <img src={logo} alt="SES Logo" className="footer-logo mobile-l:hidden block" />
                        <span className="montserrat mt-auto text-lg">Vat Number<span className="ml-4">{data.footer.vat}</span></span>
                        <span className="montserrat mb-8 text-lg">Company Number<span className="ml-4">{data.footer.company}</span></span>
                        <span className="flex">
                            <a href="#">
                                <div className="p-4 montserrat bg-gray-700 w-min rounded-xl hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out mobile-l:text-sm">
                                    Privacy&nbsp;Policy
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