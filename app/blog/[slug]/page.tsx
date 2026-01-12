import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
	const slugs = getAllSlugs();
	return slugs.map((slug) => ({
		slug
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return {
			title: 'Post Not Found'
		};
	}

	return {
		title: `${post.title} - Davi Bento`,
		description: post.excerpt
	};
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<article className='py-16'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Back Button */}
				<Link
					href='/blog'
					className='inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors'
				>
					<svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
					</svg>
					Back to Blog
				</Link>

				{/* Article Header */}
				<header className='mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>{post.title}</h1>

					<div className='flex items-center text-gray-600 dark:text-gray-400 space-x-4'>
						<time dateTime={post.date}>
							{new Date(post.date).toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric'
							})}
						</time>
						<span>•</span>
						<span>{post.readTime}</span>
					</div>
				</header>

				{/* Article Content */}
				<div className='prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary-dark prose-code:text-primary prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:border prose-pre:border-gray-800'>
					<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
						{post.content}
					</ReactMarkdown>
				</div>

				{/* Share Section */}
				<div className='mt-16 pt-8 border-t border-gray-200 dark:border-gray-800'>
					<h3 className='text-xl font-bold mb-4'>Share this article</h3>
					<div className='flex space-x-4'>
						<button className='p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all'>
							<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
							</svg>
						</button>
						<button className='p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all'>
							<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}
