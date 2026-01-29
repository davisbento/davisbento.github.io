import Link from 'next/link';

interface Post {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	readTime: string;
}

interface BlogListProps {
	posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
	return (
		<section className='py-12'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-2xl font-bold text-white mb-8 font-mono'>Blog Posts</h2>

				<div className='space-y-4'>
					{posts.map((post) => (
						<Link key={post.slug} href={`/blog/${post.slug}`} className='block group'>
							<article className='p-4 rounded-lg border border-gray-700 hover:border-gray-500 bg-gray-800/50 hover:bg-gray-800 transition-all'>
								<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
									<h3 className='text-lg font-medium text-gray-100 group-hover:text-blue-400 transition-colors'>
										{post.title}
									</h3>
									<div className='flex items-center gap-4 text-sm text-gray-500 shrink-0'>
										<time dateTime={post.date}>
											{new Date(post.date).toLocaleDateString('en-US', {
												month: 'short',
												day: 'numeric',
												year: 'numeric'
											})}
										</time>
										<span>{post.readTime}</span>
									</div>
								</div>
								<p className='mt-2 text-gray-400 text-sm line-clamp-2'>{post.excerpt}</p>
							</article>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
