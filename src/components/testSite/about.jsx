import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center">
                <div class="section-inner">
                    <h3 className="text-6xl text-gray-800 mb-12">About Us</h3>
                    <p className="text-lg text-gray-600">
                        At SES Elec Ltd (formerly Security and Electrical Services Ltd), we specialise in Electrical Installations and Testing of fixed Electrical Installations, Maintenance, Electric Charging Units, Security Access Control Systems, Full Office Refurbishments and Full Laboratory Refurbishments. Established in 1988 we undertake individual contracts and planned maintenance programmes.
                        <br/><br/>
                        The success of the company is supported by long-term employment relationships with operational and skileld staff along with stable partnerships with cub-contractors, suppliers and clients.
                        <br/><br/>
                        We have carried out work for a number of companies nationwide including; Emcor, Apleona, United Utilities, Electricity North West (ENW), British Telecomm, Diocese of Blackburn Property Commission and Salford City College. We have carried out works for these companies at Major Office Complexes, Commercial Sites, Industrial Sites, Laboratories and Colleges.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;