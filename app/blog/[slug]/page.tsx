import ShareArticle from '@/components/ShareArticle';
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
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: 'article',
			publishedTime: post.date,
			authors: ['Davi Bento']
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.excerpt
		}
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
			<div className='prose prose-lg max-w-none'>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					components={{
						h2: ({ children }) => (
							<h2 className='text-3xl font-bold mt-12 mb-6 text-gray-100'>{children}</h2>
						),
						h3: ({ children }) => (
							<h3 className='text-2xl font-bold mt-8 mb-4 text-gray-100'>{children}</h3>
						),
						p: ({ children }) => <p className='text-gray-400 leading-relaxed mb-4'>{children}</p>,
						ul: ({ children }) => <ul className='list-disc pl-6 space-y-2 mb-4 text-gray-400'>{children}</ul>,
						ol: ({ children }) => <ol className='list-decimal pl-6 space-y-2 mb-4 text-gray-400'>{children}</ol>,
						li: ({ children }) => <li className='text-gray-400 [&>p]:inline'>{children}</li>,
						a: ({ href, children }) => (
							<a href={href} className='text-primary hover:text-primary-dark transition-colors underline'>
								{children}
							</a>
						),
						code: ({ className, children }) => {
							const isInline = !className;
							if (isInline) {
								return (
									<code className='text-primary bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono'>
										{children}
									</code>
								);
							}
							return <code className={className}>{children}</code>;
						},
						pre: ({ children }) => (
							<pre className='bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto mb-6'>
								{children}
							</pre>
						),
						blockquote: ({ children }) => (
							<blockquote className='border-l-4 border-primary pl-4 italic text-gray-400 my-4'>
								{children}
							</blockquote>
						),
						strong: ({ children }) => <strong className='font-bold text-gray-200'>{children}</strong>
					}}
				>
					{post.content}
				</ReactMarkdown>
			</div>

				<ShareArticle title={post.title} slug={slug} />
			</div>
		</article>
	);
}
