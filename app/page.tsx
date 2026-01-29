import BlogList from '@/components/BlogList';
import HeroSection from '@/components/HeroSection';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
	const allPosts = getAllPosts();

	return (
		<>
			<HeroSection />
			<BlogList posts={allPosts} />
		</>
	);
}
