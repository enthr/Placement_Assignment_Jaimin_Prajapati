import { createPortal } from 'react-dom';

const Modal = ({ children, toggleModal }) => {
	if (!toggleModal.open) return null;
	return createPortal(
		<div className='absolute w-[100vw] h-[100vh] bg-bgGrey z-[1000]'>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]'>{children}</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;