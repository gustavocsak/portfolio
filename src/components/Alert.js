import React from 'react'
import { IoClose } from "react-icons/io5";


const Alert = ({ message, onClose, color }) => {

	const getColorClass = () => {
		if (color === 'red') {
		  return 'text-red-500'; // Add your red styling class here
		} else if (color === 'green') {
		  return 'text-green-500'; // Add your green styling class here
		} else {
		  return 'text-white'; // Default color or any other default styling class
		}
	};

	return (
		<div className='rounded-lg flex bg-gray-800 justify-between p-4 py-5'>
			<p className={`font-semibold ${getColorClass(color)}`}>{message}</p>
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