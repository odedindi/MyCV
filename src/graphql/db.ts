import { Bio, Education, Position } from '../types/sourceTypes';

export interface Db {
	bio: Bio;
	education: Education[];
	otherExperience: Position[];
	positions: Position[];
}

export const db: Db = {
	bio: {
		name: 'Oded Winberger',
		tagline: 'Full-Stack Developer',
		email: 'oded.winberger@email.com',
		github: 'https://github.com/odedindi',
		website: 'https://odedo.dev',
		linkedin: 'https://linkedin.com/in/odedw',
		objective: `Eager to learn new technologies and up for new challenges and opportunities where I can contribute and collaborate.`,
		skills: [
			'Speaking Hebrew, English, German and Swiss German ',
			'HTML5',
			'CSS3',
			'JavaScript',
			'TypeScript',
			'Python',
			'React.js',
			'Next.js',
			'Express.js',
			'Nest.js',
			'Django',
			'RestAPI',
			'GraphQL',
			'SQL',
			'PostgreSQL',
			'Docker',
			'GIT',
		],
	},
	positions: [
		{
			id: '5',
			title: 'Full Stack',
			company: 'Softwaremanufaktur.ch Gmbh',
			startDate: '2022-02-01',
			endDate: undefined,
			employmentType: 'Internship',
			location: 'Luzern, Switzerland',
			achievements: [
				'Internship',
				'Work mostly in German',
				"Build Axendo, the company main product's new version.",
				'Technologies involved: TypeScript (Angular.js), Nx, RestAPIs.',
			],
		},
		{
			id: '4',
			title: 'Developer',
			company: 'Beacon Geo App',
			startDate: '2021-11-01',
			endDate: '2021-12-30',
			employmentType: 'Side Project',
			location: 'Luzern, Switzerland',
			achievements: [
				'Build an advanced live chat app with geo-location aspects, such as distance preferences, live data visualization.',
				'Technologies involved: TypeScript (React.js, Nest.js), PostgreSQL, PostGIS, Docker.',
				'Code: https://github.com/odedindi/GeoChat',
			],
		},
		{
			id: '3',
			title: 'Full Stack',
			company: 'DEVPOST Climate Hackathon Project',
			startDate: '2021-03-15',
			endDate: '2021-10-01',
			employmentType: 'Side Project',
			location: 'Luzern, Switzerland',
			achievements: [
				'Develop a deep learning AI-model to analyze carbon content in soils, using infrared & radar data to evaluate the land productivity over time.',
				'Team of 2 developers and 5 data scientists.',
				'Technologies involved: TypeScript (Next.js), Python (DRF), PostgreSQL, Docker, Nginx, DigitalOcean.',
				'Live demo: https://landpro.ch',
				'Code: https://github.com/odedindi/landpro_landing',
			],
		},
		{
			id: '2',
			title: 'Frontend',
			company: 'Djone - Axpo',
			startDate: '2021-03-21',
			endDate: '2021-04-15',
			employmentType: 'Boot Camp Project',
			location: 'Zurich, Switzerland',
			achievements: [
				'Input, calculate and visualize, utility poles ground measurements data',
				'Team of 5 developers',
				'Technologies involved: JavaScript (React.js), Python (DRF), PostgreSQL and Docker.',
				'Code: https://github.com/odedindi/basicallyReact/tree/master/djone',
			],
		},
		{
			id: '1',
			title: 'Full Stack',
			company: 'Propulsion Academy (SIT)',
			startDate: '2021-03-10',
			endDate: '2021-03-15',
			employmentType: 'Boot Camp Project',
			location: 'Zurich, Switzerland',
			achievements: [
				'Processing incoming data feeds, building restaurants and restaurants reviews search engine and APIs which are consumed by iOS, Android, and Web clients.',
				'Team of 5 developers.',
				'Technologies involved: JavaScript (React.js), Python (DRF), PostgreSQL, Figma.',
				'Code: https://github.com/odedindi/basicallyReact/tree/master/luna',
			],
		},
	],
	otherExperience: [
		{
			id: '1',
			title: 'Agronomist',
			company: 'CultivAID',
			startDate: '2016-08-01',
			endDate: '2017-07-15',
			employmentType: 'Internship',
			location: 'Mekelle, Ethiopia',
			achievements: [
				'Engineers Without Borders and CultvAID (Mekelle, Ethiopia) Project',
				'Recruiting and training local workers with a focus on water management, smart irrigation and fertilization methods, pest management and control.',
			],
		},
	],
	education: [
		{
			id: '2',
			title: 'Full Stack Boot Camp',
			institute: 'Propulsion Academy (SIT)',
			link: 'https://sit.academy/de',
			startDate: '2021-02-01',
			endDate: '2021-04-28',
			location: 'Rehovot, Israel',
			description: [
				'HTML, CSS, JavaScript and React.js, Python and Django, SQL, PostgreSQL and Docker.',
			],
		},
		{
			id: '1',
			title: 'B.Sc. Agro-Ecology and Plants Health',
			institute: 'Hebrew University',
			link: 'https://hafakulta.agri.huji.ac.il/',
			startDate: '2010-09-01',
			endDate: '2013-08-15',
			location: 'Rehovot, Israel',
			description: [
				'Plant Science, Phytopathology, Pest Management, Environmental Chemistry, Environmental Protection, GIS',
			],
		},
	],
};
