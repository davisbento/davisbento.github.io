import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function BlogCard({ slug, title, excerpt, date, readTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-xl transition-all duration-300 h-full">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
          <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <span>{readTime}</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
          Read more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
