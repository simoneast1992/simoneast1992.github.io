import React from 'react';

import data from '../../data';

class About extends React.Component {
    render() {
        return (
            <div className="w-full h-auto flex items-center justify-center px-16 tablet-portrait:px-0" id="about">
                <div class="section-inner">
                    <h3 className="text-6xl text-gray-800 mb-12 laptop-m:text-5xl mobile-l:mb-10 iphone-x:text-4xl">{data.about.title}</h3>
                    <p className="text-lg text-gray-600">
                        {data.about.text1}
                        <br/><br/>
                        {data.about.text2}
                        <br/><br/>
                        {data.about.text3}
                    </p>
                </div>
            </div>
        )
    }
}

export default About;