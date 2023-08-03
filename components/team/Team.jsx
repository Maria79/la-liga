export default function Team({ team }) {
	return (
		<div className='max-w-4xl mx-auto py-2'>
			<div className='flex justify-between leading-loose py-2'>
				<div className='leading-loose'>
					<div className='text-sm'>
						Full name: <span className='font-medium'>{team.fullName}</span>{' '}
					</div>
					<div className='text-xs'>
						Stadium: <span className='font-medium'>{team.stadium}</span>{' '}
					</div>

					<div className='text-xs'>
						Founded: <span className='font-medium'>{team.yearBuilt}</span>{' '}
					</div>
				</div>
				<div>
					<div className='text-xs'>
						Number of fans: <span className='font-medium'>{team.fans}</span>{' '}
					</div>
					<div className='text-sm'>
						Website: <span className='font-medium'>{team.website}</span>{' '}
					</div>
				</div>
			</div>
		</div>
	);
}
