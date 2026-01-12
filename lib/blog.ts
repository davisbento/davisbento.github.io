import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	readTime: string;
	content: string;
}

export function getAllPosts(): BlogPost[] {
	// Get file names under /content/blog
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames
		.filter((fileName) => fileName.endsWith('.md'))
		.map((fileName) => {
			// Remove ".md" from file name to get slug
			const slug = fileName.replace(/\.md$/, '');

			// Read markdown file as string
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, 'utf8');

			// Use gray-matter to parse the post metadata section
			const { data, content } = matter(fileContents);

			// Combine the data with the slug and content
			return {
				slug,
				title: data.title,
				date: data.date,
				excerpt: data.excerpt,
				readTime: data.readTime,
				content
			} as BlogPost;
		});

	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getPostBySlug(slug: string): BlogPost | null {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.md`);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const { data, content } = matter(fileContents);

		return {
			slug,
			title: data.title,
			date: data.date,
			excerpt: data.excerpt,
			readTime: data.readTime,
			content
		} as BlogPost;
	} catch (error) {
		return null;
	}
}

export function getAllSlugs(): string[] {
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.filter((fileName) => fileName.endsWith('.md')).map((fileName) => fileName.replace(/\.md$/, ''));
}
