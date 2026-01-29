import Link from 'next/link';
import TopTalentBadge from './ToptalBadge';

const basePath = process.env.NODE_ENV === 'production' ? 'https://davisbento.dev' : '';

export default function HeroSection() {
	return (
		<section className='py-16 md:py-20'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Top accent line */}
				<div className='w-full h-[2px] bg-linear-to-r from-orange-500 via-orange-400 to-orange-500 mb-12' />

				<div className='flex flex-col md:flex-row items-center gap-8 justify-center'>
					{/* Profile Image */}
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={`${basePath}/eu_perfil.jpg`}
						alt='Davi Bento'
						className='w-[140px] h-[140px] rounded-full border-4 border-gray-600 object-cover'
					/>

					{/* Content */}
					<div className='flex-1 text-center md:text-left'>
						<h1 className='text-3xl md:text-4xl font-bold text-white mb-4 font-mono'>Hi, I&apos;m Davi</h1>

						<p className='text-gray-400 text-lg mb-6 max-w-xl'>
							Software Engineer from Brazil with 11+ years of experience building web and mobile applications with
							Node.js, React, and React Native.
						</p>

						{/* Social Links */}
						<div className='flex items-center justify-center md:justify-start gap-5'>
							<Link
								href='https://github.com/davisbento'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-white transition-colors'
								aria-label='GitHub'
							>
								<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
									<path
										fillRule='evenodd'
										d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>

							<Link
								href='https://x.com/davisbento1'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-white transition-colors'
								aria-label='X (Twitter)'
							>
								<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
								</svg>
							</Link>

							<Link
								href='https://linkedin.com/in/davisbento'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-white transition-colors'
								aria-label='LinkedIn'
							>
								<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
								</svg>
							</Link>

							<Link
								href='mailto:contato@davisbento.dev'
								className='text-gray-400 hover:text-white transition-colors'
								aria-label='Email'
							>
								<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
							</Link>
						</div>
					</div>

					<TopTalentBadge />
				</div>

				{/* Toptal Profile Link */}
				<div className='mt-12 text-center'>
					<Link
						href='https://www.toptal.com/developers/resume/davi-da-silva-bento'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium'
					>
						<span>View my full profile on Toptal</span>
						<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
							/>
						</svg>
					</Link>
				</div>

				{/* Bottom accent line */}
				<div className='w-full h-[2px] bg-linear-to-r from-orange-500 via-orange-400 to-orange-500 mt-12' />
			</div>
		</section>
	);
}
