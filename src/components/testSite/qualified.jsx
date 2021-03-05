import React from 'react';

import forty from '../../images/40.svg';
import data from '../../data.json';

class Qualified extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center red-section">
                <div className="section-inner flex items-center">
                    <div className="section-inner-half">
                        <h3 className="text-6xl text-white mb-12 laptop-m:text-5xl">{data.qualified.title}</h3>
                        <p className="text-lg text-white">
                            {data.qualified.text}
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