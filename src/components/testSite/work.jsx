import React from 'react';

import data from '../../data.json';

import g09a from '../../images/gallery/G09/1.jpg';
import g09b from '../../images/gallery/G09/2.jpg';
import g09c from '../../images/gallery/G09/3.jpg';

import g040a from '../../images/gallery/G040/1.jpg';
import g040b from '../../images/gallery/G040/2.jpg';
import g040c from '../../images/gallery/G040/3.jpg';
import g040d from '../../images/gallery/G040/4.jpg';
import g040e from '../../images/gallery/G040/5.jpg';
import g040f from '../../images/gallery/G040/6.jpg';

import g048a from '../../images/gallery/G048/1.jpg';
import g048b from '../../images/gallery/G048/2.jpg';
import g048c from '../../images/gallery/G048/3.jpg';
import g048d from '../../images/gallery/G048/4.jpg';
import g048e from '../../images/gallery/G048/5.jpg';
import g048f from '../../images/gallery/G048/6.jpg';

import g060a from '../../images/gallery/G060/1.jpg';
import g060b from '../../images/gallery/G060/2.jpg';
import g060c from '../../images/gallery/G060/3.jpg';
// import g060d from '../../images/gallery/G060/4.jpg';
import g060e from '../../images/gallery/G060/5.jpg';
import g060f from '../../images/gallery/G060/6.jpg';
// import g060g from '../../images/gallery/G060/7.jpg';
import g060h from '../../images/gallery/G060/8.jpg';
// import g060i from '../../images/gallery/G060/9.jpg';
import g060j from '../../images/gallery/G060/10.jpg';
// import g060k from '../../images/gallery/G060/11.jpg';
import g060l from '../../images/gallery/G060/12.jpg';
import g060m from '../../images/gallery/G060/13.jpg';

import g090a from '../../images/gallery/G090/1.jpg';
import g090b from '../../images/gallery/G090/2.jpg';
// import g090c from '../../images/gallery/G090/3.jpg';
import g090d from '../../images/gallery/G090/4.jpg';

import uclana from '../../images/gallery/uclan-whitehaven/1.jpg';
import uclanb from '../../images/gallery/uclan-whitehaven/2.jpg';
import uclanc from '../../images/gallery/uclan-whitehaven/3.jpg';
import ucland from '../../images/gallery/uclan-whitehaven/4.jpg';
import uclane from '../../images/gallery/uclan-whitehaven/5.jpg';
import uclanf from '../../images/gallery/uclan-whitehaven/6.jpg';
import uclang from '../../images/gallery/uclan-whitehaven/7.jpg';
import uclanh from '../../images/gallery/uclan-whitehaven/8.jpg';
import uclani from '../../images/gallery/uclan-whitehaven/9.jpg';

import stowea from '../../images/gallery/stowe/1.jpg';
// import stoweb from '../../images/gallery/stowe/2.jpg';
import stowec from '../../images/gallery/stowe/3.jpg';
import stowed from '../../images/gallery/stowe/4.jpg';
import stowee from '../../images/gallery/stowe/5.jpg';
import stowef from '../../images/gallery/stowe/6.jpg';
import stoweg from '../../images/gallery/stowe/7.jpg';

import glazeda from '../../images/gallery/glazed-screens/1.jpg';
// import glazedb from '../../images/gallery/glazed-screens/2.jpg';
// import glazedc from '../../images/gallery/glazed-screens/3.jpg';
import glazedd from '../../images/gallery/glazed-screens/4.jpg';
// import glazede from '../../images/gallery/glazed-screens/5.jpg';
import glazedf from '../../images/gallery/glazed-screens/6.jpg';
// import glazedg from '../../images/gallery/glazed-screens/7.jpg';

class Work extends React.Component {
    constructor(){
        super();

        this.handleLabGallery = this.handleLabGallery.bind(this)
        this.handleOfficeGallery = this.handleOfficeGallery.bind(this)

        this.state = {
            currentGallery: 1,
        }
    }

    componentDidMount = () => {
        this.setState({currentGallery: 2});
        this.setState({currentGallery: 1});
    }

    handleLabGallery = () => {
        this.setState({currentGallery: 1});
    }

    handleOfficeGallery = () => {
        this.setState({currentGallery: 2});
    }

    handleElecGallery = () => {
        this.setState({currentGallery: 3});
    }

    handleMiscGallery = () => {
        this.setState({currentGallery: 4});
    }

    render() {

        return (
            <>
                <div className="w-full h-auto flex items-center justify-center" id="work">
                    <div class="section-inner">
                        <h3 className="text-6xl text-gray-800 mb-12">{data.work.title}</h3>
                        <p className="text-lg text-gray-600">
                            {data.work.text}
                        </p>
                    </div>
                </div>
                <div className="w-full h-auto flex">
                    <div className="gallery w-1/4 h-auto gallery-lab relative" onClick={this.handleLabGallery}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 flex items-center justify-center flex-col">
                            <h3 className="text-white mb-4 text-3xl">Laboratory Refurbishments</h3>
                            <h4 className="text-white text-xl uppercase tracking-widest">{this.state.currentGallery === 1 ? 'Viewing' : 'View More'}</h4>
                            {this.state.currentGallery === 1 ?
                                <span className="gallery-triangle absolute bottom-0" />
                                : null
                            }
                        </div>
                    </div>
                    <div className="gallery w-1/4 h-auto gallery-office relative" onClick={this.handleOfficeGallery}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 flex items-center justify-center flex-col">
                            <h3 className="text-white mb-4 text-3xl">Office Refurbishments</h3>
                            <h4 className="text-white text-xl uppercase tracking-widest">{this.state.currentGallery === 2 ? 'Viewing' : 'View More'}</h4>
                            {this.state.currentGallery === 2 ?
                                <span className="gallery-triangle absolute bottom-0" />
                                : null
                            }
                        </div>
                    </div>
                    <div className="gallery w-1/4 h-auto gallery-elec relative pointer-events-none">
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-80 flex items-center justify-center flex-col">
                            <h3 className="text-white mb-4 text-3xl">Electrical Installations</h3>
                            <h4 className="text-white text-xl uppercase tracking-widest">{this.state.currentGallery === 3 ? 'Viewing' : 'Coming Soon'}</h4>
                            {this.state.currentGallery === 3 ?
                                <span className="gallery-triangle absolute bottom-0" />
                                : null
                            }
                        </div>
                    </div>
                    <div className="gallery w-1/4 h-auto gallery-misc relative pointer-events-none">
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-80 flex items-center justify-center flex-col">
                            <h3 className="text-white mb-4 text-3xl">Miscellaneous Jobs</h3>
                            <h4 className="text-white text-xl uppercase tracking-widest">{this.state.currentGallery === 4 ? 'Viewing' : 'Coming Soon'}</h4>
                            {this.state.currentGallery === 4 ?
                                <span className="gallery-triangle absolute bottom-0" />
                                : null
                            }
                        </div>
                    </div>
                </div>
                {this.state.currentGallery === 1 ?
                    <div className="w-full h-auto flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="section-inner padding-bottom-0">
                                <h3 className="text-4xl text-gray-800 mb-12">G09 - Laboratory Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g09a} alt="United Utilities G09" />
                                    <img src={g09b} alt="United Utilities G09" />
                                    <img src={g09c} alt="United Utilities G09" />
                                </div>
                            </div>
                            <div className="section-inner padding-bottom-0">
                                <h3 className="text-4xl text-gray-800 mb-12">G040 - Laboratory Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g040a} alt="United Utilities G040" />
                                    <img src={g040b} alt="United Utilities G040" />
                                    <img src={g040c} alt="United Utilities G040" />
                                    <img src={g040d} alt="United Utilities G040" />
                                    <img src={g040e} alt="United Utilities G040" />
                                    <img src={g040f} alt="United Utilities G040" />
                                </div>
                            </div>
                            <div className="section-inner padding-bottom-0">
                                <h3 className="text-4xl text-gray-800 mb-12">G048 - Laboratory Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g048a} alt="United Utilities G048" />
                                    <img src={g048b} alt="United Utilities G048" />
                                    <img src={g048c} alt="United Utilities G048" />
                                    <img src={g048d} alt="United Utilities G048" />
                                    <img src={g048e} alt="United Utilities G048" />
                                    <img src={g048f} alt="United Utilities G048" />
                                </div>
                            </div>
                            <div className="section-inner padding-bottom-0">
                                <h3 className="text-4xl text-gray-800 mb-12">G060 - Laboratory Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g060a} alt="United Utilities G060" />
                                    <img src={g060b} alt="United Utilities G060" />
                                    <img src={g060c} alt="United Utilities G060" />
                                    {/* <img src={g060d} alt="United Utilities G060" /> */}
                                    <img src={g060e} alt="United Utilities G060" />
                                    <img src={g060f} alt="United Utilities G060" />
                                    {/* <img src={g060g} alt="United Utilities G060" /> */}
                                    <img src={g060h} alt="United Utilities G060" />
                                    {/* <img src={g060i} alt="United Utilities G060" /> */}
                                    <img src={g060j} alt="United Utilities G060" />
                                    {/* <img src={g060k} alt="United Utilities G060" /> */}
                                    <img src={g060l} alt="United Utilities G060" />
                                    <img src={g060m} alt="United Utilities G060" />
                                </div>
                            </div>
                            <div className="section-inner">
                                <h3 className="text-4xl text-gray-800 mb-12">G090 - Laboratory Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g090a} alt="United Utilities G090" />
                                    <img src={g090b} alt="United Utilities G090" />
                                    {/* <img src={g090c} alt="United Utilities G090" /> */}
                                    <img src={g090d} alt="United Utilities G090" />
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
                {this.state.currentGallery === 2 ?
                    <div className="w-full h-auto flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="section-inner padding-bottom-0">
                                <h3 className="text-4xl text-gray-800 mb-12">Uclan Whitehaven - Office Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={uclana} alt="Uclan Whitehaven Office Refurbishment" />
                                    <img src={uclanb} alt="Uclan Whitehaven Office Refurbishment" />
                                    <img src={uclanc} alt="Uclan Whitehaven Office Refurbishment" />
                                    <img src={ucland} alt="Uclan Whitehaven Office Refurbishment" />
                                    <img src={uclane} alt="Uclan Whitehaven Office Refurbishment" />
                                    <img src={uclanf} alt="Uclan Whitehaven Office Refurbishment" />
                                    <img src={uclang} alt="Uclan Whitehaven Office Refurbishment" />
                                    <img src={uclanh} alt="Uclan Whitehaven Office Refurbishment" />
                                    <img src={uclani} alt="Uclan Whitehaven Office Refurbishment" />
                                </div>
                            </div>
                            <div className="section-inner padding-bottom-0">
                                <h3 className="text-4xl text-gray-800 mb-12">Stowe - Office Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={stowea} alt="Stowe Office Refurbishment" />
                                    {/* <img src={stoweb} alt="Stowe Office Refurbishment" /> */}
                                    <img src={stowec} alt="Stowe Office Refurbishment" />
                                    <img src={stowed} alt="Stowe Office Refurbishment" />
                                    <img src={stowee} alt="Stowe Office Refurbishment" />
                                    <img src={stowef} alt="Stowe Office Refurbishment" />
                                    <img src={stoweg} alt="Stowe Office Refurbishment" />
                                </div>
                            </div>
                            <div className="section-inner">
                                <h3 className="text-4xl text-gray-800 mb-12">Glazed Screens - Office Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={glazeda} alt="Glazed Screens Office Refurbishment" />
                                    {/* <img src={glazedb} alt="Glazed Screens Office Refurbishment" /> */}
                                    {/* <img src={glazedc} alt="Glazed Screens Office Refurbishment" /> */}
                                    <img src={glazedd} alt="Glazed Screens Office Refurbishment" />
                                    {/* <img src={glazede} alt="Glazed Screens Office Refurbishment" /> */}
                                    <img src={glazedf} alt="Glazed Screens Office Refurbishment" />
                                    {/* <img src={glazedg} alt="Glazed Screens Office Refurbishment" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
                {this.state.currentGallery === 3 ?
                    <div className="w-full h-auto flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="section-inner padding-bottom-0">
                                <h3 className="text-4xl text-gray-800 mb-12">G060 - Elec Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g09a} alt="United Utilities G09" />
                                    <img src={g09b} alt="United Utilities G09" />
                                    <img src={g09c} alt="United Utilities G09" />
                                </div>
                            </div>
                            <div className="section-inner">
                                <h3 className="text-4xl text-gray-800 mb-12">G090 - Laboratory Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g09a} alt="United Utilities G09" />
                                    <img src={g09b} alt="United Utilities G09" />
                                    <img src={g09c} alt="United Utilities G09" />
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
                {this.state.currentGallery === 4 ?
                    <div className="w-full h-auto flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="section-inner padding-bottom-0">
                                <h3 className="text-4xl text-gray-800 mb-12">G09 - Misc Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g09a} alt="United Utilities G09" />
                                    <img src={g09b} alt="United Utilities G09" />
                                    <img src={g09c} alt="United Utilities G09" />
                                </div>
                            </div>
                            <div className="section-inner">
                                <h3 className="text-4xl text-gray-800 mb-12">G09 - Laboratory Refurbishment</h3>
                                <p className="text-lg text-gray-600 mb-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="w-full h-auto grid grid-cols-3 gap-6">
                                    <img src={g09a} alt="United Utilities G09" />
                                    <img src={g09b} alt="United Utilities G09" />
                                    <img src={g09c} alt="United Utilities G09" />
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
            </>
        )
    }
}

export default Work;