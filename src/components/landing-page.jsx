import React from 'react';
import Main from './testSite/main';
import Loading from './testSite/loading';

import logo from '../images/ses-w-b.png';

class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            password: '',
            testSite: false
        }
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updatePassword(event){
        this.setState({password : event.target.value})
    }


    handleSubmit(){
        if (this.state.password === '123') {
            this.setState({testSite: !this.state.testSite})
        }
    }

    render() {

        return (
            this.state.testSite ? (
                <>
                    <Loading />
                    <Main />
                </>
            ) : (
                <div className="w-screen h-screen subpixel-antialiased flex justify-center items-center flex-col p-8 custom-bg">
                    <div className="w-full max-w-max p-16 pb-8 bg-white rounded-xl relative">
                        <h1 className="text-5xl font-bold pb-6 text-red-500">
                            Website coming soon...
                        </h1>
                        <div className="flex justify-between flex-wrap items-end">
                            <div className="pr-8 pb-8 flex flex-col">
                                <p className="pb-2">
                                    You can still get in touch via email or phone.
                                </p>
                                <a href="mailto:neil@sesbs.co.uk" className="font-bold text-xl">
                                    neil@sesbs.co.uk
                                </a>
                                <a href="tel:+447976754849" className="font-bold text-xl">
                                    07976754849
                                </a>
                            </div>
                            <img src={logo} alt="SESBS Logo" width="180px" height="78px" className="pb-8" />
                        </div>
                    </div>
                    <div className="w-screen flex justify-end items-center bg-white p-4 fixed bottom-0">
                        <input
                            type="text"
                            onChange={this.updatePassword}
                            className="w-auto h-10 text-xs px-4 mr-2 rounded bg-gray-50 outline-none focus:bg-gray-100"
                        />
                        <input
                            type="button"
                            onClick={this.handleSubmit}
                            value="Admin Login"
                            className="w-auto h-10 text-xs font-medium py-2 px-4 rounded bg-red-500 text-white cursor-pointer outline-none hover:bg-red-600"
                        />
                    </div>
                </div>
            )
        )
    }
}

export default LandingPage;