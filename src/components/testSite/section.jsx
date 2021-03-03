import React from 'react';

class Section extends React.Component {
    render() {
        return (
            <div className="w-full h-auto bg-white">
                {this.props.children}
            </div>
        )
    }
}

export default Section;