export const metadata = {
  title: 'About - Davi Bento',
  description: 'Learn more about Davi Bento, a Software Engineer from Brazil with 11 years of experience in Node.js, React, and React Native.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm Davi, a passionate software engineer from Brazil with over 11 years of professional experience building web and mobile applications.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              My journey in software development began over a decade ago, and it has been an incredible adventure. Starting with web development, I quickly fell in love with JavaScript and its ecosystem. Over the years, I've specialized in Node.js for backend development, React for building dynamic web applications, and React Native for cross-platform mobile development.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Throughout my career, I've had the privilege of working on diverse projects ranging from startups to enterprise applications. I've built scalable APIs, developed complex single-page applications, and created mobile apps used by thousands of users. Each project has taught me valuable lessons about architecture, performance optimization, and user experience.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Being from Brazil, I've had the unique opportunity to work with international teams and contribute to global projects. This experience has not only improved my technical skills but also taught me the importance of clear communication and collaboration in distributed teams.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">💻</span>
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  React & Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  TypeScript & JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Tailwind CSS & Styled Components
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Redux & State Management
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">⚙️</span>
                Backend Development
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Node.js & Express
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  NestJS & TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  REST APIs & GraphQL
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  PostgreSQL & MongoDB
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Microservices Architecture
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">📱</span>
                Mobile Development
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  React Native
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  iOS & Android Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Expo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Native Modules
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  App Store & Play Store Deployment
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🛠️</span>
                Tools & Practices
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Docker & Kubernetes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  CI/CD Pipelines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Agile & Scrum
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Test-Driven Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-3xl mr-3">🚀</span>
                Full-Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I build complete web applications from the ground up, handling both frontend and backend development. From database design to user interface, I ensure every part of the application works seamlessly together.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-3xl mr-3">📐</span>
                Architecture & Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I design scalable and maintainable application architectures, focusing on clean code principles, design patterns, and best practices that stand the test of time.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-3xl mr-3">🎨</span>
                UI/UX Implementation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I transform designs into pixel-perfect, responsive interfaces that provide excellent user experiences across all devices and screen sizes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-3xl mr-3">🔧</span>
                Performance Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I optimize applications for speed and efficiency, implementing best practices for code splitting, lazy loading, caching, and other performance-enhancing techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:davi@example.com"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}
