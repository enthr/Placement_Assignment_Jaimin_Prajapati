const Footer = () => {
	return (
		<footer className='min-h-[5vh] text-black bg-white dark:text-white dark:bg-black py-2'>
			<nav className='container mx-auto'>
				<div className='w-full h-full flex justify-center items-center gap-4'>
					<p className='font-medium text-center'>&copy; Developed By Jaimin Prajapati</p>
					<p className='font-medium text-center'>-</p>
					<a href='https://github.com/enthr' target='_blank' className='font-bold text-blue dark:text-lightBlue hover:underline hover:decoration-solid hover:underline-offset-4 hover:decoration-4'>GitHub</a>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;