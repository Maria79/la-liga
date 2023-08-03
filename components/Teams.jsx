'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Teams({ teamsD }) {
	const router = useRouter();

	return (
		<div className='flex gap-x-4 justify-center'>
			{teamsD.map((team) => (
				<div
					key={team.id}
					className='cursor-pointer'
					onClick={() => router.push(`/teams/${team.short_name}`)}
				>
					<Image
						src={team.shield_png}
						alt={team.nameShow}
						title={team.nameShow}
						width={50}
						height={50}
					/>
				</div>
			))}
		</div>
	);
}
