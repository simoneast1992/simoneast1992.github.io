import React from 'react';

import forty from '../../images/40.svg';

class Qualified extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center bg-red-500">
                <div className="section-inner flex items-start">
                    <div className="section-inner-half">
                        <h3 className="text-6xl text-white mb-12">Qualified</h3>
                        <p className="text-lg text-white">
                            With over 40 years' experience, a team of fully qualified personnel, and a wide range of qualified sub-contractors, we are happy to listen to any job, big or small, that you might need. Get in touch by phone, email or by using the contact form on this page and we will reply as quickly as possible.
                        </p>
                    </div>
                    <div className="section-inner-half flex justify-end">
                        <img src={forty} alt="SES Logo" width="270"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Qualified;