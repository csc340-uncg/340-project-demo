export default function ArchitecturePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight">System Architecture</h1>
          <p className="text-gray-400 mt-2">Technical design and implementation</p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Architecture Overview</h2>
        <div className="bg-white border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
          <p className="text-gray-700 mb-6">
            The Service Provider Platform uses a three-tier architecture consisting of a presentation layer (frontend), business logic layer (backend), and data persistence layer (database).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="border border-gray-300 p-6 bg-gray-50" style={{ borderRadius: "0px" }}>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 1: Presentation</h3>
              <p className="text-sm text-gray-600">
                Web-based frontend built with HTML, CSS, and JavaScript. Renders dynamic content and handles user interactions.
              </p>
            </div>
            <div className="border border-gray-300 p-6 bg-gray-50" style={{ borderRadius: "0px" }}>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 2: Business Logic</h3>
              <p className="text-sm text-gray-600">
                Backend API that handles requests, enforces business rules, manages authentication, and coordinates data operations.
              </p>
            </div>
            <div className="border border-gray-300 p-6 bg-gray-50" style={{ borderRadius: "0px" }}>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 3: Data Storage</h3>
              <p className="text-sm text-gray-600">
                Persistent database storing users, services, bookings, reviews, and all transactional data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend Technologies</h3>
            <div className="space-y-3">
              <div className="border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">HTML5</h4>
                <p className="text-sm text-gray-600">Semantic markup for content structure and accessibility</p>
              </div>
              <div className="border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">CSS3 and Tailwind</h4>
                <p className="text-sm text-gray-600">Modern styling with responsive design capabilities</p>
              </div>
              <div className="border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">JavaScript/React</h4>
                <p className="text-sm text-gray-600">Dynamic interactions and component-based UI</p>
              </div>
              <div className="border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Responsive Framework</h4>
                <p className="text-sm text-gray-600">Mobile-first design that works on all devices</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend Technologies</h3>
            <div className="space-y-3">
              <div className="border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">REST API</h4>
                <p className="text-sm text-gray-600">HTTP-based endpoints for client-server communication</p>
              </div>
              <div className="border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Node.js or Python</h4>
                <p className="text-sm text-gray-600">Server runtime and business logic implementation</p>
              </div>
              <div className="border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Authentication</h4>
                <p className="text-sm text-gray-600">JWT or session-based user authentication and authorization</p>
              </div>
              <div className="border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Validation</h4>
                <p className="text-sm text-gray-600">Input validation and business rule enforcement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Design */}
      <section className="bg-gray-50 border-t border-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Database Schema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
              <h3 className="font-semibold text-gray-900 mb-4">Core Entities</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <span className="font-semibold text-gray-900">Users</span>
                  <p className="text-gray-600">Customers and providers with authentication</p>
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-gray-900">Services</span>
                  <p className="text-gray-600">Service offerings with categories and pricing</p>
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-gray-900">Bookings</span>
                  <p className="text-gray-600">Customer service requests and transactions</p>
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-gray-900">Reviews</span>
                  <p className="text-gray-600">Ratings and feedback from customers</p>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
              <h3 className="font-semibold text-gray-900 mb-4">Supporting Tables</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <span className="font-semibold text-gray-900">Categories</span>
                  <p className="text-gray-600">Service categories and classification system</p>
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-gray-900">Messages</span>
                  <p className="text-gray-600">Communication between users</p>
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-gray-900">Payments</span>
                  <p className="text-gray-600">Transaction records and financial data</p>
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-gray-900">Availability</span>
                  <p className="text-gray-600">Provider scheduling and calendar</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Design Patterns */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Key Design Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
            <h3 className="font-semibold text-gray-900 mb-3">Model-View-Controller</h3>
            <p className="text-sm text-gray-600">
              Clear separation between data models, user interface, and business logic for maintainability.
            </p>
          </div>
          <div className="border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
            <h3 className="font-semibold text-gray-900 mb-3">RESTful Design</h3>
            <p className="text-sm text-gray-600">
              Standard HTTP methods and resource-based endpoints for consistent API design.
            </p>
          </div>
          <div className="border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
            <h3 className="font-semibold text-gray-900 mb-3">Middleware Pattern</h3>
            <p className="text-sm text-gray-600">
              Reusable components for authentication, validation, logging, and error handling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

