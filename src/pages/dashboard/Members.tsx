import React, { useState } from "react";

type Member = {
  name: string;
  activity: string;
  lastActive: string;
  location: string;
  primaryMail: string;
  tags: string[];
};

const sampleMembers: Member[] = [
  {
    name: "Ian Dooley",
    activity: "Active",
    lastActive: "5th May",
    location: "New York, USA",
    primaryMail: "someone@grovio.xyz",
    tags: ["Badge", "VIP"],
  },
  {
    name: "Ian Dooley",
    activity: "Idle",
    lastActive: "Today",
    location: "London, UK",
    primaryMail: "someone@grovio.xyz",
    tags: ["Badge", "Member"],
  },
  {
    name: "Ian Dooley",
    activity: "Offline",
    lastActive: "Yesterday",
    location: "Berlin, Germany",
    primaryMail: "someone@grovio.xyz",
    tags: ["Premium", "Subscribed"],
  },
  // Add more members as needed
];

const MembersTable: React.FC = () => {
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sampleMembers.length / rowsPerPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Members List</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm border-b">
                <th className="p-4 text-left">
                  <input type="checkbox" className="h-4 w-4" />
                </th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Activity</th>
                <th className="p-4 text-left">Last Active</th>
                <th className="p-4 text-left">Location</th>
                <th className="p-4 text-left">Primary Email</th>
                <th className="p-4 text-left">Tags</th>
              </tr>
            </thead>

            <tbody>
              {sampleMembers
                .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                .map((member, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4">
                      <input type="checkbox" className="h-4 w-4" />
                    </td>
                    <td className="p-4">{member.name}</td>
                    <td className="p-4">{member.activity}</td>
                    <td className="p-4">{member.lastActive}</td>
                    <td className="p-4">{member.location}</td>
                    <td className="p-4 text-blue-600 underline">
                      <a href={`mailto:${member.primaryMail}`}>
                        {member.primaryMail}
                      </a>
                    </td>
                    <td className="p-4">
                      {member.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mr-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          {/* Rows per page */}
          <div className="relative">
            <select
              className="border border-gray-300 text-sm rounded-lg p-2 bg-white cursor-pointer"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
            >
              <option value={10}>10 per page</option>
              <option value={25}>25 per page</option>
              <option value={50}>50 per page</option>
              <option value={100}>100 per page</option>
            </select>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Prev
            </button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;
