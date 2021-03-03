import React from 'react';
import Nav from './nav';
import Header from './header';
import Section from './section';
import About from './about';
import Qualified from './qualified';
import Work from './work';
import Clients from './clients';
import Footer from './footer';

class Main extends React.Component {
	render() {
		return (
			<main className="custom-main w-full h-auto min-h-screen overflow-x-hidden">
				<Header
					title="Building Services Simplified"
					subtitle="With over 40 years in business, we have all the experience you need to get the job done."
				>
					<Nav background="red"/>
				</Header>
				<Section>
					<Nav />
					<About />
					<Qualified />
					<Work />
					<Clients />
					<Footer />
				</Section>
			</main>
		)
	}
}

export default Main;