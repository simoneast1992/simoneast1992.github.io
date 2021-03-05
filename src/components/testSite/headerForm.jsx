import React from 'react';

class HeaderForm extends React.Component {
    render() {
        return (
            <form name="contact" method="POST" className="w-512px max-w-xl h-auto flex flex-col p-12 bg-white rounded-xl shadow-lg relative tracking-wide">

                <input type="hidden" name="form-name" value="contact" />

                <h3 className="pb-6 text-3xl">Get in touch</h3>

                <label className="text-md mb-2 text-gray-600" for="form-name">Name<span className="text-red-500">*</span></label>
                <input className="mb-6 h-10 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 text-gray-500" type="text" name="name" id="form-name" required />

                <label className="text-md mb-2 text-gray-600" for="form-business">Business Name<span className="text-red-500">*</span></label>
                <input className="mb-6 h-10 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 text-gray-500" type="text" name="business" id="form-business" required />

                <label className="text-md mb-2 text-gray-600" for="form-number">Number<span className="text-red-500">*</span></label>
                <input className="mb-6 h-10 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 text-gray-500" type="number" name="number" id="form-number" required />

                <label className="text-md mb-2 text-gray-600" for="form-email">Email<span className="text-red-500">*</span></label>
                <input className="mb-6 h-10 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 text-gray-500" type="text" name="email" id="form-email" required />

                <label className="text-md mb-2 text-gray-600" for="form-message">Message<span className="text-red-500">*</span></label>
                <textarea className="mb-6 h-36 py-2 px-3 bg-gray-100 outline-none focus:bg-gray-100 text-gray-500 resize-none" name="message" id="form-message" required />

                <button className="montserrat w-1/2 p-2 bg-red-500 text-xl text-white absolute -bottom-8 left-1/4 h-16 rounded-xl shadow-lg cursor-pointer hover:bg-red-600 outline-none transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none" type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default HeaderForm;