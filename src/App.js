import React, { useEffect } from 'react';

import Main from './components/testSite/main';

function App() {

	useEffect(() => {
		test()
	});

	const test = () => {
		return <Main />
	}

	return (
		<>
			{test()}
		</>
	);
}

export default App;
