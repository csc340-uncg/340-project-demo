export default function DemosPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight">Use Case Scenarios</h1>
          <p className="text-gray-400 mt-2">Real-world examples demonstrating platform capabilities</p>
        </div>
      </section>

      {/* Scenarios */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Platform Use Cases</h2>

        <div className="space-y-8">
          {/* Scenario 1 */}
          <div className="border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <div className="flex items-start gap-6">
              <div className="bg-gray-900 text-white px-4 py-2 font-bold flex-shrink-0" style={{ borderRadius: "0px" }}>
                Scenario 1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Finding Reliable Childcare</h3>
                <p className="text-gray-700 mb-4">
                  A working parent needs reliable childcare providers. They search the platform by location and service type, review provider profiles and customer ratings, and book a trial session.
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Steps:</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">1.</span>
                      <span>Parent creates account and specifies childcare needs</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">2.</span>
                      <span>Searches for providers in their zip code with required certifications</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">3.</span>
                      <span>Reviews provider profiles, ratings, and customer reviews</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">4.</span>
                      <span>Messages provider with specific requirements</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">5.</span>
                      <span>Books service and leaves review after first session</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <div className="flex items-start gap-6">
              <div className="bg-gray-900 text-white px-4 py-2 font-bold flex-shrink-0" style={{ borderRadius: "0px" }}>
                Scenario 2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Building a Service Provider Business</h3>
                <p className="text-gray-700 mb-4">
                  A skilled handyman wants to grow their business. They create a provider profile, list services with pricing, and manage bookings through the platform.
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Steps:</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">1.</span>
                      <span>Provider registers and uploads credentials and portfolio photos</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">2.</span>
                      <span>Creates detailed service listings with pricing</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">3.</span>
                      <span>Sets availability calendar for customers to book</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">4.</span>
                      <span>Receives bookings and communicates with customers</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">5.</span>
                      <span>Builds reputation through customer reviews and ratings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <div className="flex items-start gap-6">
              <div className="bg-gray-900 text-white px-4 py-2 font-bold flex-shrink-0" style={{ borderRadius: "0px" }}>
                Scenario 3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Managing Platform Content</h3>
                <p className="text-gray-700 mb-4">
                  An administrator maintains platform integrity by reviewing content, verifying provider credentials, and handling customer disputes.
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Steps:</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">1.</span>
                      <span>Admin accesses dashboard and views pending provider applications</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">2.</span>
                      <span>Verifies credentials and approves or rejects new providers</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">3.</span>
                      <span>Reviews flagged content and customer complaints</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">4.</span>
                      <span>Takes action (warnings, suspension) against violators</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">5.</span>
                      <span>Generates reports on platform health and activity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          {/* Scenario 4 */}
          <div className="border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
            <div className="flex items-start gap-6">
              <div className="bg-gray-900 text-white px-4 py-2 font-bold flex-shrink-0" style={{ borderRadius: "0px" }}>
                Scenario 4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Building Trust Through Reviews</h3>
                <p className="text-gray-700 mb-4">
                  The review system helps customers make informed decisions and providers build credibility in the marketplace.
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4" style={{ borderRadius: "0px" }}>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Steps:</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">1.</span>
                      <span>Customer receives service and leaves detailed review with photos</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">2.</span>
                      <span>Provider receives notification and opportunity to respond</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">3.</span>
                      <span>Reviews aggregate to affect provider rating and visibility</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">4.</span>
                      <span>High-rated providers attract more customers</span>
                    </li>
                    <li className="text-sm text-gray-600 flex gap-2">
                      <span className="flex-shrink-0">5.</span>
                      <span>Low-rated providers either improve or are removed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

