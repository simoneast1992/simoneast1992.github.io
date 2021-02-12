import React from 'react';
import Nav from './nav';
import Header from './header';

class Main extends React.Component {
	render() {
		return (
			<main className="custom-main w-screen h-auto min-h-screen">
				<Nav />
				<Header />
				{/* <Nav/>
				<Header/> Includes contact
				<Section/>
				<Footer/> */}
			</main>
		)
	}
}

export default Main;