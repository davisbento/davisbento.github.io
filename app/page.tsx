import BlogCard from '@/components/BlogCard';
import SkillCard from '@/components/SkillCard';
import TopTalentBadge from '@/components/ToptalBadge';
import { getAllPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const allPosts = getAllPosts();
	const featuredPosts = allPosts.slice(0, 2); // Get the 2 most recent posts

	return (
		<>
			{/* Hero Section */}
			<section className='relative py-20 md:py-32 overflow-hidden'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='flex flex-col items-center text-center'>
						{/* Profile Picture and Badge Section */}
						<div className='flex flex-col items-center gap-6 mb-8'>
							{/* Profile Picture */}
							<div className='relative'>
								<div className='absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-40 animate-pulse' />
								<Image
									src='/eu_perfil.jpg'
									alt='Davi Bento'
									width={140}
									height={140}
									className='relative rounded-full border-3 border-primary/30 shadow-2xl'
									priority
								/>
							</div>

							{/* Toptal Badge - Scaled Down */}
							<div className='scale-75 -mt-2'>
								<TopTalentBadge />
							</div>
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

			{/* Skills Section */}
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

			{/* Experience Highlight */}
			<section className='py-16'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
							<div>
								<div className='text-5xl font-bold mb-2'>11+</div>
								<div className='text-xl opacity-90'>Years Experience</div>
							</div>
							<div>
								<div className='text-5xl font-bold mb-2'>100+</div>
								<div className='text-xl opacity-90'>Projects Delivered</div>
							</div>
							<div>
								<div className='text-5xl font-bold mb-2'>3</div>
								<div className='text-xl opacity-90'>Core Technologies</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Blog Posts */}
			<section className='py-16 bg-gray-800'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center mb-12'>
						<div>
							<h2 className='text-4xl font-bold mb-2'>Latest Blog Posts</h2>
							<p className='text-gray-400'>Sharing knowledge and experiences from the field</p>
						</div>
						<Link
							href='/blog'
							className='hidden md:block text-primary hover:text-secondary font-medium transition-colors'
						>
							View All →
						</Link>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{featuredPosts.map((post) => (
							<BlogCard key={post.slug} {...post} />
						))}
					</div>

					<div className='md:hidden text-center mt-8'>
						<Link href='/blog' className='inline-block text-primary hover:text-secondary font-medium transition-colors'>
							View All Posts →
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl font-bold mb-4'>Let&apos;s Work Together</h2>

					<p className='text-xl text-gray-400 mb-8'>
						I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
					</p>
					<a
						href='mailto:contato@davisbento.dev'
						className='inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105'
					>
						Get In Touch
					</a>
				</div>
			</section>
		</>
	);
}
