import React from 'react';

class HeaderForm extends React.Component {
    render() {
        return (
            <form name="contact" method="POST" className="header-form max-w-xl h-auto flex flex-col p-12 laptop-l:p-8 mobile-l:px-6 bg-white rounded-xl shadow-lg relative tracking-wide">

                <input type="hidden" name="form-name" value="contact" />

                <h3 className="pb-6 text-3xl laptop-l:pb-4 laptop-l:text-2xl laptop-m:text-xl">Get in touch</h3>

                <label className="text-base mb-2 text-gray-600 laptop-l:text-sm" for="form-name">Name<span className="text-red-500">*</span></label>
                <input className="text-base mb-6 h-10 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 laptop-l:mb-4 laptop-l:text-sm laptop-m:h-8 laptop-m:mb-2" type="text" name="name" id="form-name" required />

                <label className="text-base mb-2 text-gray-600 laptop-l:text-sm" for="form-business">Business Name<span className="text-red-500">*</span></label>
                <input className="text-base mb-6 h-10 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 laptop-l:mb-4 laptop-l:text-sm laptop-m:h-8 laptop-m:mb-2" type="text" name="business" id="form-business" required />

                <label className="text-base mb-2 text-gray-600 laptop-l:text-sm" for="form-number">Number<span className="text-red-500">*</span></label>
                <input className="text-base mb-6 h-10 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 laptop-l:mb-4 laptop-l:text-sm laptop-m:h-8 laptop-m:mb-2" type="number" name="number" id="form-number" required />

                <label className="text-base mb-2 text-gray-600 laptop-l:text-sm" for="form-email">Email<span className="text-red-500">*</span></label>
                <input className="text-base mb-6 h-10 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 laptop-l:mb-4 laptop-l:text-sm laptop-m:h-8 laptop-m:mb-2" type="text" name="email" id="form-email" required />

                <label className="text-base mb-2 text-gray-600 laptop-l:text-sm" for="form-message">Message<span className="text-red-500">*</span></label>
                <textarea className="text-base mb-6 h-36 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 resize-none laptop-l:h-28 laptop-l:text-sm laptop-l:mb-4 laptop-m:h-20 laptop-m:mb-2" name="message" id="form-message" required />

                <button className="montserrat w-1/2 p-2 bg-red-600 text-xl text-white absolute -bottom-8 left-1/4 h-16 rounded-xl shadow-lg cursor-pointer hover:bg-red-700 outline-none transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none laptop-l:text-lg laptop-l:h-14 laptop-m:text-base laptop-m:h-12" type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default HeaderForm;