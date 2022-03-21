import React from 'react';

import has from '../../images/accreditations/has.webp';
import nic from '../../images/accreditations/niceic.png';

class Accreditations extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center px-16 tablet-portrait:px-0">
                <div class="section-inner-small">
                    <div className="w-full h-auto flex justify-center items-center">
                        <img src={has} alt="HAS Logo" className="mr-20 has-logo mobile-l:mr-8 iphone-x:mr-4" />
                        <img src={nic} alt="NICEIC Logo" className="nic-logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Accreditations;