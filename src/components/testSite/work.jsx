import React from 'react';

class Work extends React.Component {
    render() {
        return (
            <>
            <div className="w-full h-auto flex items-center justify-center">
                <div class="section-inner">
                    <h3 className="text-6xl text-gray-800 mb-12">Our Work</h3>
                    <p className="text-lg text-gray-600">
                        At SES Elec Ltd we do a wide variety of jobs ranging from full laboratory refurbishments to something as simple as changing a light switch. Most recently we have been focused on delivering top quality work at the laboratories for United Utilities. These laboratories are complex and include many specialist instruments and equipment which require a lot of care and we pride ourselves on delivering the best quality refurbishment we can. We have enjoyed a very positive working relationship with United Utilities over the last 22 years and we hope this continues.
                    </p>
                </div>
            </div>
            <div className="w-full h-auto flex">
                <div className="gallery w-1/4 h-auto bg-red-50">
                </div>
                <div className="gallery w-1/4 h-auto bg-red-100">
                </div>
                <div className="gallery w-1/4 h-auto bg-red-200">
                </div>
                <div className="gallery w-1/4 h-auto bg-red-300">
                </div>
            </div>
            </>
        )
    }
}

export default Work;