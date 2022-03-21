import React from 'react';
import MobileNav from './mobileNav';
import Nav from './nav';
import Header from './header';
import Section from './section';
import About from './about';
import Qualified from './qualified';
import Work from './work';
import Clients from './clients';
import Accreditations from './accreditations';
import Footer from './footer';

import data from '../../data.json';

class Main extends React.Component {
	render() {
		return (
			<main className="w-full h-auto min-h-screen overflow-x-hidden">
				<MobileNav />
				<Header
					title={data.header.title}
					subtitle={data.header.subtitle}
				>
					<Nav color="white"/>
				</Header>
				<Section>
					<Nav />
					<About />
					<Qualified />
					<Work />
					<Clients />
					<Footer />
					<Accreditations />
				</Section>
			</main>
		)
	}
}

export default Main;