import logo from './images/ses-w-b.png';

function App() {
	return (
		<div className="w-screen h-screen subpixel-antialiased flex justify-center items-center flex-col tracking-wider p-8 custom-bg">
			<div className="w-full max-w-max p-16 pb-8 bg-white rounded-xl relative">
				<h1 className="text-5xl font-bold pb-6 text-red-500">
					Website coming soon...
				</h1>
				<div className="flex justify-between flex-wrap items-end">
					<div className="pr-8 pb-8 flex flex-col">
						<p className="pb-2">
							You can still get in touch via email or phone.
						</p>
						<a href="mailto:neil@sesbs.co.uk" className="font-bold text-xl">
							neil@sesbs.co.uk
						</a>
						<a href="tel:+447976754849" className="font-bold text-xl">
							07976754849
						</a>
					</div>
					<img src={logo} alt="SESBS Logo" width="180px" height="78px" className="pb-8" />
				</div>
			</div>
		</div>
	);
}

export default App;
