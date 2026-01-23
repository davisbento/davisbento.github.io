import Link from 'next/link';
import TopTalentBadge from './ToptalBadge';

const basePath = process.env.NODE_ENV === 'production' ? '/davisbento.dev' : '';

export default function HeroSection() {
	return (
		<section className='relative py-20 md:py-32 overflow-hidden'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='flex flex-col items-center text-center'>
					<div className='flex items-center gap-8 mb-8'>
						<div className='relative'>
							<div className='absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-40 animate-pulse' />
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={`${basePath}/eu_perfil.jpg`}
								alt='Davi Bento'
								width={140}
								height={140}
								className='relative rounded-full border-3 border-primary/30 shadow-2xl'
							/>
						</div>

						<TopTalentBadge />
					</div>

					<h1 className='text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient'>
						Hi, I&apos;m Davi Bento 👋
					</h1>

					<p className='text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto'>Software Engineer from Brazil 🇧🇷</p>

					<p className='text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto'>
						Building amazing web and mobile experiences with{' '}
						<span className='font-semibold text-primary'>Node.js</span>,{' '}
						<span className='font-semibold text-primary'>React</span>, and{' '}
						<span className='font-semibold text-primary'>React Native</span> for over 11 years
					</p>

					<div className='flex flex-wrap justify-center gap-4'>
						<Link
							href='/about'
							className='px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105'
						>
							Learn More About Me
						</Link>
						<Link
							href='/blog'
							className='px-8 py-3 bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105'
						>
							Read My Blog
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
