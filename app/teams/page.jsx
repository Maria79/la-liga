import getAllTeams from '@/lib/getAllTeams';
import Teams from '@/components/Teams';
import Hero from '@/components/Hero';

export default async function TeamsPage() {
	const teamsData = await getAllTeams();
	const teams = teamsData.team;

	return (
		<div className='text-white pt-3'>
			<Teams teamsD={teams} />
			<Hero />
		</div>
	);
}
