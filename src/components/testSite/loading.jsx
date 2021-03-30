import React from 'react';

import icon from '../../images/loading.svg';

class Loading extends React.Component {
    constructor() {
        super();

        this.state = {
            rendered: true,
        }
    }

    componentDidMount() {
        setTimeout(function(){
            this.setState({rendered: false});
        }.bind(this),5000);
    }

    render() {
        return (
            this.state.rendered ? (
                <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center brick-bg">
                    <img src={icon} alt="Loading Icon" width="128" />
                </div>
            ) : null
        )
    }
}

export default Loading;