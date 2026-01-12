import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
	title: 'Blog - Davi Bento',
	description:
		'Read articles about web development, React, Node.js, React Native, and software engineering best practices.'
};

export default function Blog() {
	const posts = getAllPosts();

	return (
		<>
			{/* Hero Section */}
			<section className='py-20 md:py-32 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-50' />

				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>
						Blog
					</h1>
					<p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
						Thoughts, stories, and ideas about software development, technology, and the journey of building great
						products.
					</p>
				</div>
			</section>

			{/* Blog Posts Grid */}
			<section className='py-16'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					{posts.length === 0 ? (
						<div className='text-center py-12'>
							<p className='text-xl text-gray-600 dark:text-gray-400'>No blog posts yet. Check back soon!</p>
						</div>
					) : (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{posts.map((post) => (
								<BlogCard key={post.slug} {...post} />
							))}
						</div>
					)}
				</div>
			</section>

			{/* Newsletter CTA */}
			<section className='py-16 bg-gray-50 dark:bg-gray-900'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl font-bold mb-4'>Stay Updated</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 mb-8'>
						Get notified when I publish new articles about web development and software engineering.
					</p>
					<form className='max-w-md mx-auto flex gap-4'>
						<input
							type='email'
							placeholder='Enter your email'
							className='flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary'
						/>
						<button
							type='submit'
							className='px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all hover:shadow-lg'
						>
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</>
	);
}
