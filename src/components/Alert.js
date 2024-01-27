import React from 'react'
import { IoClose } from "react-icons/io5";


const Alert = ({ message, onClose }) => {

	return (
		<div className='rounded-lg flex bg-gray-800 justify-between p-4 py-5'>
			<p className='font-semibold text-green-500'>{message}</p>
			<button
				onClick={onClose}
				type='button'
				className='rounded-lg text-lg hover:bg-gray-600'  
				
			>
				<IoClose className='text-2xl' />
			</button>
		</div>
	)
}

export default Alert