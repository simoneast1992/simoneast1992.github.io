import React from 'react';

class Notification extends React.Component {
    constructor() {
        super();

        this.state = {
            closed: false,
        }

        this.closeNotification = this.closeNotification.bind(this)
    }

    closeNotification = () => {
        this.setState({closed: true})
    }

    render() {
        return (
            !this.state.closed ? (
                <div className="notification-banner w-full h-auto bg-opacity-90 bg-gray-800 fixed flex justify-start items-center mobile-l:flex-col mobile-l:items-start shadow">
                    <div className="close-button w-20 h-20 p-4 flex items-center justify-center cursor-pointer" onClick={this.closeNotification}>
                        <div className="notification-close-icon relative">
                            <span className="transform rotate-45 absolute"/>
                            <span className="transform -rotate-45 absolute"/>
                        </div>
                    </div>
                    <span className="text-lg text-white p-6 mobile-l:pt-0">
                        This website is under construction and may be missing content or features
                    </span>
                </div>
            ) : null
        )
    }
}

export default Notification;