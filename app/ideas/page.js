"use client";

import { useState, useEffect } from "react";



export default function IdeasPage() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [claimingId, setClaimingId] = useState(null);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/ideas");
      if (!response.ok) throw new Error("Failed to fetch ideas");
      const data = await response.json();
      setIdeas(data);
      setError(null);
    } catch (err) {
      setError("Error loading project ideas");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClaimIdea = async (id, teamName) => {
    if (!teamName.trim()) {
      setError("Please enter a team name");
      return;
    }
    setClaimingId(id);
    try {
      const response = await fetch("/api/ideas", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          status: "claimed",
          teamName: teamName.trim(),
        }),
      });
      if (!response.ok) {
        if (response.status === 409) {
          setError("Team has already claimed an idea!");
          return;
        }
        throw new Error("Failed to claim idea");
      }
      await fetchIdeas();
      setError(null);
    } catch (err) {
      setError("Error claiming idea");
      console.error(err);
    } finally {
      setClaimingId(null);
    }
  };

  const handleReleaseIdea = async (id) => {
    setClaimingId(id);
    try {
      const response = await fetch("/api/ideas", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: "available" }),
      });
      if (!response.ok) throw new Error("Failed to release idea");
      await fetchIdeas();
      setError(null);
    } catch (err) {
      setError("Error releasing idea");
      console.error(err);
    } finally {
      setClaimingId(null);
    }
  };

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "available":
        return "bg-white border border-gray-300 text-gray-700";
      case "claimed":
        return "bg-gray-100 border border-gray-400 text-gray-800";
      case "completed":
        return "bg-gray-200 border border-gray-500 text-gray-900";
      default:
        return "bg-white border border-gray-300 text-gray-700";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "available":
        return "Available";
      case "claimed":
        return "Claimed";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight">Project Ideas</h1>
          <p className="text-gray-400 mt-2">Team project ideas for the summer</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-gray-50 border-b border-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-700">
            Below are curated project ideas that teams can claim and implement. Each idea is designed to meet the course requirements and provide a valuable learning experience.
          </p>
          <p className="text-gray-700">
            Teams can claim available ideas and modify them as needed. Once an idea is claimed, it will be marked accordingly to help other teams find open projects. Feel free to explore the ideas and claim one that excites your team!
          </p>
        </div>
      </section>
      {/* Status Guide */}
      <section className="bg-gray-50 border-t border-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Status Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-300 p-6 bg-white" style={{ borderRadius: "0px" }}>
              <h3 className="font-semibold text-gray-900 mb-3">Available</h3>
              <p className="text-sm text-gray-600 mb-3">
                Idea is open for teams to claim. Click "Claim Idea" to assign it to your team.
              </p>
              <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getStatusBadgeStyle("available")}`} style={{ borderRadius: "0px" }}>
                {getStatusLabel("available")}
              </span>
            </div>
            <div className="border border-gray-300 p-6 bg-white" style={{ borderRadius: "0px" }}>
              <h3 className="font-semibold text-gray-900 mb-3">Claimed</h3>
              <p className="text-sm text-gray-600 mb-3">
                Idea is being worked on by a team. Click "Release Idea" if your team can no longer work on it.
              </p>
              <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getStatusBadgeStyle("claimed")}`} style={{ borderRadius: "0px" }}>
                {getStatusLabel("claimed")}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Error Message */}
      {error && (
        <section className="bg-white border-b border-gray-300">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="border border-gray-300 bg-gray-50 p-4" style={{ borderRadius: "0px" }}>
              <p className="text-gray-900 font-semibold text-sm">Error: {error}</p>
            </div>
          </div>
        </section>
      )}

      {/* Ideas List */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading project ideas...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {ideas.map((idea) => (
              <div key={idea.id} className="border border-gray-300 p-8" style={{ borderRadius: "0px" }}>
                <div className="flex justify-between items-start gap-6 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-green-900">{idea.name}</h3>

                    </div>
                    <p className="text-sm text-gray-600 mb-1">{idea.category}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{idea.description}</p>
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold">Customer:</span> {idea.customer}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold">Provider:</span> {idea.provider}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold">Features:</span> {idea.features}
                </p>
                <div className="mb-6">
                  <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getStatusBadgeStyle(idea.status)}`} style={{ borderRadius: "0px" }}>
                    {getStatusLabel(idea.status)}
                  </span>
                </div>

                {/* Status-specific content */}
                {idea.status === "claimed" && idea.team_name !== null && idea.team_name !== undefined && (
                  <div className="bg-gray-50 border border-gray-300 p-4 mb-6" style={{ borderRadius: "0px" }}>
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">Claimed by Team:</span> {idea.team_name}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  {idea.status === "available" && (
                    <ClaimForm
                      ideaId={idea.id}
                      onClaim={handleClaimIdea}
                      isLoading={claimingId === idea.id}
                    />
                  )}
                  {idea.status === "claimed" && (
                    <button
                      onClick={() => handleReleaseIdea(idea.id)}
                      disabled={claimingId === idea.id}
                      className="px-4 py-2 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wide hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ borderRadius: "0px" }}
                    >
                      {claimingId === idea.id ? "Releasing..." : "Release Idea"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>


    </div>
  );
}

function ClaimForm({ ideaId, onClaim, isLoading }) {
  const [teamName, setTeamName] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onClaim(ideaId, teamName);
    setTeamName("");
    setIsExpanded(false);
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="px-4 py-2 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wide hover:bg-gray-800"
        style={{ borderRadius: "0px" }}
      >
        Claim Idea
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
      <input
        type="number"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Team #"
        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-600"
        style={{ borderRadius: "0px" }}
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 px-4 py-2 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wide hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ borderRadius: "0px" }}
        >
          {isLoading ? "Claiming..." : "Confirm"}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsExpanded(false);
            setTeamName("");
          }}
          className="flex-1 px-4 py-2 bg-gray-300 text-gray-900 font-semibold text-sm uppercase tracking-wide hover:bg-gray-400"
          style={{ borderRadius: "0px" }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

