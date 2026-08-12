export default function UsersPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight">User Types and Roles</h1>
          <p className="text-gray-400 mt-2">System functionality for different user types</p>
        </div>
      </section>
            <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="bg-white border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
           Each member of your group will be responsible for developing subsystems/services for a specific type of user.
           Each type of user will have specific services available to them. </p>
           <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Customer</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Service Provider</span>
                  </li>
                </ul>
        </div>
      </section>

      {/* User Types */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Platform User Types</h2>

        <div className="space-y-8">
          {/* Customer */}
          <div className="border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer</h3>
            <p className="text-gray-700 mb-6">
              Individual or business seeking services from qualified providers. Customers can search, compare, book, and review services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Search and filter available services</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>View provider profiles and ratings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Buy/Purchase/Book services</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Leave reviews and ratings</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Example Account Features</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Personal profile and preferences</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Booking history and receipts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Saved favorites and watchlist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Provider */}
          <div className="border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Service Provider</h3>
            <p className="text-gray-700 mb-6">
              Professional or business offering services to customers. Providers manage profiles, respond to bookings, and build reputation through reviews.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Create and manage service listings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Set pricing and availability</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Accept and manage bookings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Reply to reviews and ratings</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Example Account Features</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Professional profile with credentials</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Service portfolio and photos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Earnings/revenue tracking & statistics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Calendar and schedule management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Administrator */}
          <div className="border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Administrator (if your team has 3 members)</h3>
            <p className="text-gray-700 mb-6">
              Platform administrator with oversight and management responsibilities. Handles content moderation, user management, and system operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Manage user accounts and permissions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Moderate content and reviews</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Monitor platform activity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Example Account Features</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Comprehensive admin dashboard</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Analytics and reporting tools</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>User management interface</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-900 flex-shrink-0">•</span>
                    <span>Content moderation queue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permissions Matrix */}
      <section className="bg-gray-50 border-t border-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Permissions Summary</h2>
          <div className="overflow-x-auto border border-gray-300" style={{ borderRadius: "0px" }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-3 text-left font-semibold">Function</th>
                  <th className="px-6 py-3 text-center font-semibold">Customer</th>
                  <th className="px-6 py-3 text-center font-semibold">Provider</th>
                  <th className="px-6 py-3 text-center font-semibold">Admin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-300 hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Browse Services</td>
                  <td className="px-6 py-3 text-center text-gray-600">Yes</td>
                  <td className="px-6 py-3 text-center text-gray-600">Yes</td>
                  <td className="px-6 py-3 text-center text-gray-600">Yes</td>
                </tr>
                <tr className="border-t border-gray-300 hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Book Services</td>
                  <td className="px-6 py-3 text-center text-gray-600">Yes</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                </tr>
                <tr className="border-t border-gray-300 hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Create Listings</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                  <td className="px-6 py-3 text-center text-gray-600">Yes</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                </tr>
                <tr className="border-t border-gray-300 hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Leave Reviews</td>
                  <td className="px-6 py-3 text-center text-gray-600">Yes</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                </tr>
                <tr className="border-t border-gray-300 hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Moderate Content</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                  <td className="px-6 py-3 text-center text-gray-600">Yes</td>
                </tr>
                <tr className="border-t border-gray-300 hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Manage Users</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                  <td className="px-6 py-3 text-center text-gray-600">—</td>
                  <td className="px-6 py-3 text-center text-gray-600">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

