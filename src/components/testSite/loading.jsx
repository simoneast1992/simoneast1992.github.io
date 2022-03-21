import React from 'react';

import icon from '../../images/loading.svg';

class Loading extends React.Component {

    render() {
        return (
			<div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center brick-bg">
				<img src={icon} alt="Loading Icon" width="128" />
			</div>
        )
    }
}

export default Loading;