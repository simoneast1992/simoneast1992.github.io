import React from 'react';

import emcor from '../../images/emcor.webp';
import united from '../../images/united-utilities.svg';

class Clients extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center red-section" id="clients">
                <div className="section-inner">
                    <div className="w-full h-auto flex justify-center items-center">
                        <img src={emcor} alt="Emcor Logo" className="mr-20 emcor-logo mobile-l:mr-8 iphone-x:mr-4" />
                        <img src={united} alt="United Utilities Logo" className="utilities-logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Clients;