export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Service Provider Platform</h1>
          <p className="text-xl text-gray-300 mb-2 font-light">
            A comprehensive system to help customers locate service providers that match their needs.
          </p>
          <p className="text-base text-gray-400">
            Summer 2026 Class Project | Documentation and Specifications
          </p>
        </div>
      </section>

      {/* Prompt */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Term Project</h2>
        <div className="bg-white border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            A huge share of your grade will come from the class project!
            You will be required to work in pairs to develop a piece of software using methodologies and models discussed in class.
            We will try to work as closely as possible to the way software is developed in the industry. Therefore, we will adopt an incremental approach to producing our software product. </p>
          <p>The culmination of this will be final project presentations during the last class session, July 23rd. See the class schedule for specific dates and deadlines!
            While you have almost complete creative freedom on your software product, there are basic requirements that need to be fulfilled. </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Project Overview</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Understand the problem statement, goals, and target demographics for the service provider platform.
            </p>
            <a href="/overview" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
              View Documentation
            </a>
          </div>

          <div className="bg-white border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">User Roles</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Explore the three main user types with their distinct responsibilities and capabilities.
            </p>
            <a href="/users" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
              View Roles
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Project Ideas</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Browse and claim from 16 pre-vetted project ideas with persistent status tracking.
            </p>
            <a href="/ideas" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
              Browse Ideas
            </a>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-gray-50 py-16 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-sm font-semibold text-gray-700 flex-shrink-0">SEARCH</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Discovery</h4>
                <p className="text-sm text-gray-600">
                  Advanced search and filtering to help customers find the right service providers based on location, category, and ratings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-sm font-semibold text-gray-700 flex-shrink-0">REVIEWS</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Community Feedback</h4>
                <p className="text-sm text-gray-600">
                  Transparent rating system and customer reviews to build trust and accountability in the community.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-sm font-semibold text-gray-700 flex-shrink-0">MANAGE</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Provider Management</h4>
                <p className="text-sm text-gray-600">
                  Tools for service providers to manage profiles, services, pricing, and customer interactions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-sm font-semibold text-gray-700 flex-shrink-0">ADMIN</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Platform Moderation</h4>
                <p className="text-sm text-gray-600">
                  System administrator controls for moderation, user management, and compliance monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Project Requirements</h2>
        <div className="bg-white border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Scope</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">Solves real-world service discovery problem</li>
                <li className="text-sm text-gray-600">Multiple user types with distinct roles</li>
                <li className="text-sm text-gray-600">Persistent data storage with REST API</li>
                <li className="text-sm text-gray-600">Responsive web interface</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Key Features</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">Advanced search and filtering</li>
                <li className="text-sm text-gray-600">Review and rating system</li>
                <li className="text-sm text-gray-600">Service subscription management</li>
                <li className="text-sm text-gray-600">Administrative controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
