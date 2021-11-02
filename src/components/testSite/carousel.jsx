import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.imageNumber,
        }
    }

    render () {
        return (
            <div className="carousel fixed flex inset-0 justify-center items-center bg-black bg-opacity-95">
                <div
                    className="close-button w-20 h-20 p-4 flex items-center justify-center cursor-pointer absolute top-0 right-0 shadow-md" onClick={this.props.onClose}
                >
                    <div className="close-icon relative bg-red-500">
                        <span className="transform rotate-45 absolute"/>
                        <span className="transform -rotate-45 absolute"/>
                    </div>
                </div>
                <span className="flex flex-col items-center relative">
                    {this.props.images[this.state.image]}
                    <span className="w-full bg-gray-800 text-white flex justify-between items-center pt-2 pb-1 px-2 mt-2">
                        <button
                            disabled={this.state.image === 0}
                            className="border-none p-3 hover:underline focus:outline-none"
                            onClick={() => this.setState({image: this.state.image - 1})}
                        >
                            Previous
                        </button>
                        Image {this.state.image + 1} of {this.props.images.length}
                        <button
                            disabled={this.state.image === (this.props.images.length - 1)}
                            className="border-none p-2 hover:underline focus:outline-none"
                            onClick={() => this.setState({image: this.state.image + 1})}
                        >
                            Next
                        </button>
                    </span>
                </span>
            </div>
        )
    }
}

export default Carousel;