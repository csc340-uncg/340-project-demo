export default function OverviewPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight">Project Overview</h1>
          <p className="text-gray-400 mt-2">Problem statement, goals, and system scope</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Problem Statement</h2>
        <div className="bg-white border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            This system addresses the challenge of connecting customers with service providers who meet their specific needs. The platform targets multiple service industries including caregiving, home repair, travel, healthcare, and more.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            By creating a transparent, community-driven marketplace, we enable customers to discover reliable providers while giving service professionals a platform to showcase their expertise and build reputation.
          </p>
        </div>
      </section>

      {/* Goals and Requirements */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Project Goals</h2>
            <div className="border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">Create an intuitive platform for service discovery</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">Support multiple user roles with specific functionality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">Enable persistent data storage with REST API</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">Implement a responsive web interface</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">Support community reviews and ratings</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Requirements</h2>
            <div className="border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">Solves a real-world problem</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">Caters to different user types</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">Persistent data storage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">REST API backend</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-900 font-semibold flex-shrink-0">—</span>
                  <span className="text-gray-700">HTML/CSS web interface</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Demographics */}
      <section className="bg-gray-50 border-t border-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Target Demographics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
              <h3 className="text-sm uppercase tracking-wide font-semibold text-gray-900 mb-4">Service Industries</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Caregiving and Healthcare</li>
                <li>Home Repair and Maintenance</li>
                <li>Travel and Tourism</li>
                <li>E-commerce</li>
                <li>Professional Services</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
              <h3 className="text-sm uppercase tracking-wide font-semibold text-gray-900 mb-4">Customer Types</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Individual consumers</li>
                <li>Small business owners</li>
                <li>Enterprise clients</li>
                <li>Specialized demographics</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-300 p-6" style={{ borderRadius: "0px" }}>
              <h3 className="text-sm uppercase tracking-wide font-semibold text-gray-900 mb-4">Key Challenges</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Finding reliable providers</li>
                <li>Verifying service quality</li>
                <li>Managing reviews fairly</li>
                <li>Ensuring platform safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

