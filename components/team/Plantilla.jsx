'use client';
import Image from 'next/image';
import React, { useState } from 'react';

// Create a separate Modal component
function Modal({ plantilla, onClose }) {
	return (
		<div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
			<div className=' bg-white p-5 rounded-lg shadow-md'>
				<h2 className='text-lg font-semibold mb-2'>{plantilla.nick}</h2>
				<p className='text-sm'> {plantilla.CountryCode}</p>
				<div className='flex gap-6 '>
					<div className='border flex flex-col gap-y-2 p-2'>
						{/* <h2>Datos personales:</h2> */}

						<p className='text-sm'>Años: {plantilla.age}</p>
						<p className='text-sm'>Peso: {plantilla.weight}kg</p>
						<p className='text-sm'>Altura: {plantilla.height}cm</p>
					</div>
					<div className='border flex flex-col gap-y-2 p-2'>
						<p className='text-sm'>Dorsal: {plantilla.squadNumber}</p>
						<p className='text-sm'>Puntos: {plantilla.rating}</p>
						<p className='text-sm'>
							Pie: {plantilla.foot === '1' ? 'Derecho' : 'Izquierdo'}
						</p>
					</div>
					{/* Add other player information as needed */}
					<div className='border flex flex-col gap-y-2 p-2'>
						<p className='text-sm'>Yellow cards: {plantilla.ycards}</p>
						<p className='text-sm'>Red cards: {plantilla.rcards}</p>
						<p className='text-sm'>Total cards: {plantilla.cards}</p>
					</div>
					<div className='border flex flex-col gap-y-2 p-2'>
						<p className='text-sm'>Goles: {plantilla.goals}</p>
						<p className='text-sm'>Assists: {plantilla.assists}</p>
						<p className='text-sm'>Partidos: {plantilla.matched}</p>
					</div>
					<div className='border flex flex-col gap-y-2 p-2'>
						<p className='text-sm'>Concentrado: {plantilla.called}</p>
						<p className='text-sm'>Titular: {plantilla.lineup}</p>
						<p className='text-sm'>Minutos jugados: {plantilla.minutes}</p>
						<p className='text-sm'>
							Goles concedidos: {plantilla.goals_conceded}
						</p>
					</div>
				</div>

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

export default function Plantilla({ plantillas }) {
	const [selectedPlantilla, setSelectedPlantilla] = useState(null);

	const handleImageClick = (plantilla) => {
		setSelectedPlantilla(plantilla);
	};

	const handleCloseModal = () => {
		setSelectedPlantilla(null);
	};

	return (
		<div className='w-full flex justify-center'>
			<div className=' grid grid-cols-4 gap-8 p-3'>
				{plantillas.map((plantilla) => (
					<div
						key={plantilla.id}
						className='border shadow-md p-1'
						onClick={() => handleImageClick(plantilla)}
					>
						<div className=''>{plantilla.nick}</div>
						<div className='text-xs'>{plantilla.CountryCode}</div>
						<Image
							src={plantilla.image}
							alt={plantilla.nick}
							title={plantilla.nick}
							width={50}
							height={50}
						/>
					</div>
				))}
			</div>
			{/* Conditionally render the Modal when selectedPlantilla is not null */}
			{selectedPlantilla && (
				<Modal plantilla={selectedPlantilla} onClose={handleCloseModal} />
			)}
		</div>
	);
}
