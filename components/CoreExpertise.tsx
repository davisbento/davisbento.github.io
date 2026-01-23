import SkillCard from './SkillCard';

export default function CoreExpertise() {
	return (
		<section className='py-16 bg-gray-800'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-4xl font-bold text-center mb-4'>Core Expertise</h2>
				<p className='text-center text-gray-400 mb-12 max-w-2xl mx-auto'>
					With 11 years of professional experience, I specialize in building scalable and performant applications
				</p>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<SkillCard
						icon='⚡'
						title='Node.js'
						description='Building robust backend services, REST APIs, and microservices with Express, NestJS, and other modern frameworks.'
					/>
					<SkillCard
						icon='⚛️'
						title='React'
						description='Creating dynamic and responsive web applications with React, Next.js, and modern state management solutions.'
					/>
					<SkillCard
						icon='📱'
						title='React Native'
						description='Developing cross-platform mobile applications with native performance and beautiful user interfaces.'
					/>
				</div>
			</div>
		</section>
	);
}
