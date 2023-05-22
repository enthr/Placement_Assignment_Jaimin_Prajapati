import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<hr />
				<nav className='container mx-auto py-4 px-2 h-[7.5vh]'>
					<div className='flex justify-between items-center h-full'>
						<p className='text-lg'>Developed By Jaimin 👍</p>
						<a href='https://github.com/enthr' className='flex items-center gap-1' target='_blank'>
							<p className='text-lg hidden md:block'>My GitHub</p>
						</a>
					</div>
				</nav>
			</footer>
		);
	}
}

export default Footer;