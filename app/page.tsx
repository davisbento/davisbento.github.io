import ContactCTA from '@/components/ContactCTA';
import CoreExpertise from '@/components/CoreExpertise';
import ExperienceHighlight from '@/components/ExperienceHighlight';
import FeaturedPosts from '@/components/FeaturedPosts';
import HeroSection from '@/components/HeroSection';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
	const allPosts = getAllPosts();
	const featuredPosts = allPosts.slice(0, 2);

	return (
		<>
			<HeroSection />
			<CoreExpertise />
			<ExperienceHighlight />
			<FeaturedPosts posts={featuredPosts} />
			<ContactCTA />
		</>
	);
}
