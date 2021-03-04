import React from 'react';

import emcor from '../../images/emcor.png';
import united from '../../images/united-utilities.svg';

class Clients extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center red-section" id="clients">
                <div className="section-inner">
                    {/* <h3 className="text-6xl text-white mb-12">Clients</h3> */}
                    <div className="w-full h-auto flex justify-center items-center">
                        <img src={emcor} alt="Emcor Logo" width="300" className="mr-20" />
                        <img src={united} alt="United Utilities Logo" width="220" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Clients;