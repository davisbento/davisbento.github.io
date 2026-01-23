import Link from 'next/link';
import BlogCard from './BlogCard';

interface Post {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	readTime: string;
}

interface FeaturedPostsProps {
	posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
	return (
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
					{posts.map((post) => (
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
	);
}
