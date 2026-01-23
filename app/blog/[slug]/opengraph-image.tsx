import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const runtime = 'nodejs';
export const alt = 'Blog Post';
export const size = {
	width: 1200,
	height: 630
};
export const contentType = 'image/png';

export async function generateStaticParams() {
	const slugs = getAllSlugs();
	return slugs.map((slug) => ({
		slug
	}));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	const title = post?.title || 'Blog Post';
	const date = post?.date
		? new Date(post.date).toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
			})
		: '';
	const readTime = post?.readTime || '';

	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '60px',
					background: 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #293548 100%)'
				}}
			>
				{/* Top section with logo/name */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '16px'
					}}
				>
					<div
						style={{
							width: '48px',
							height: '48px',
							borderRadius: '50%',
							background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '24px',
							fontWeight: 'bold',
							color: 'white'
						}}
					>
						D
					</div>
					<span
						style={{
							fontSize: '24px',
							color: '#9ca3af',
							fontWeight: '500'
						}}
					>
						davisbento.dev
					</span>
				</div>

				{/* Title section */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '24px'
					}}
				>
					<h1
						style={{
							fontSize: title.length > 60 ? '48px' : '56px',
							fontWeight: 'bold',
							color: 'white',
							lineHeight: 1.2,
							margin: 0,
							maxWidth: '900px'
						}}
					>
						{title}
					</h1>

					{/* Meta info */}
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '16px',
							fontSize: '20px',
							color: '#9ca3af'
						}}
					>
						{date && <span>{date}</span>}
						{date && readTime && <span>•</span>}
						{readTime && <span>{readTime}</span>}
					</div>
				</div>

				{/* Bottom gradient line */}
				<div
					style={{
						height: '4px',
						width: '200px',
						background: 'linear-gradient(90deg, #60a5fa 0%, #38bdf8 50%, #93c5fd 100%)',
						borderRadius: '2px'
					}}
				/>
			</div>
		),
		{
			...size
		}
	);
}
