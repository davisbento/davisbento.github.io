export default function ContactCTA() {
	return (
		<section className='py-16'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<h2 className='text-4xl font-bold mb-4'>Let&apos;s Work Together</h2>

				<p className='text-xl text-gray-400 mb-8'>
					I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
				</p>
				<a
					href='mailto:contato@davisbento.dev'
					className='inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105'
				>
					Get In Touch
				</a>
			</div>
		</section>
	);
}
