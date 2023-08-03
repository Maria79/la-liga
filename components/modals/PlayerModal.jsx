// Create a separate Modal component
function Modal({ plantilla, onClose }) {
	return (
		<div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
			<div className='bg-white p-5 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold mb-2'>{plantilla.nick}</h2>
				<p className='text-sm'>Country Code: {plantilla.CountryCode}</p>
				{/* Add other player information as needed */}
				<button
					className='bg-blue-500 text-white px-4 py-2 mt-4 rounded-md'
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>
	);
}

// c6196c01e7c1d93932590f42beec9ef8
