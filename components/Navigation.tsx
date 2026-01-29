'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' }
	];

	return (
		<nav className='sticky top-0 z-50 backdrop-blur-lg bg-background/95 border-b border-gray-700'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<Link href='/' className='text-xl font-bold text-white font-mono hover:opacity-80 transition-opacity'>
						davisbento.dev
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex space-x-8'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='text-gray-400 hover:text-white transition-colors font-medium'
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label='Toggle menu'
					>
						<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							{isMenuOpen ? (
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
							) : (
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className='md:hidden py-4 space-y-2 border-t border-gray-700'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='block py-2 px-4 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors font-medium'
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
