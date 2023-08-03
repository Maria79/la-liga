'use client';
import Image from 'next/image';

export default function Escudo({ team }) {
	return (
		<div className='max-w-5xl mx-auto'>
			<div className='flex justify-between items-center'>
				<Image
					src={team.shield}
					alt={team.short_name}
					title={team.short_name}
					width={100}
					height={100}
				/>
				<div>
					<h1 className='text-2xl  mr-36 font-semibold text-center'>
						{team.nameShow}
					</h1>
				</div>
			</div>
		</div>
	);
}
