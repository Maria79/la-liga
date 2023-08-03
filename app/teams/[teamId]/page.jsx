import Escudo from '@/components/team/Escudo';
import Plantilla from '@/components/team/Plantilla';
import Team from '@/components/team/Team';
import getAllTeams from '@/lib/getAllTeams';
import getPlantilla from '@/lib/getPlantilla';
import getTeam from '@/lib/getTeam';

export default async function TeamPage({ params }) {
	const value = params.teamId;
	const teamsData = await getAllTeams();
	const teams = teamsData.team;

	const t = teams.filter((td) => td.short_name === value);
	// console.log(t);

	const q = t[0].id;
	// console.log(q);

	const teamData = await getTeam(q);
	const team = teamData.team;

	const playerData = await getPlantilla(q);
	const plantilla = await playerData.players;

	console.log(plantilla);

	return (
		<div>
			{/* <p>{params.teamId}</p> */}
			<div className='max-w-6xl mx-auto p-8'>
				<Escudo team={team} />
				<Team team={team} />
				<Plantilla plantillas={plantilla} />
			</div>
		</div>
	);
}
