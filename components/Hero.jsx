import Image from 'next/image';
import React from 'react';

export default function Hero() {
	return (
		<div className=''>
			<Image
				src='/img/bg-image.jpg'
				alt='bg-image'
				fill
				className='-z-10 brightness-50 bg-bottom'
			/>
		</div>
	);
}
// width={100} height={100}
