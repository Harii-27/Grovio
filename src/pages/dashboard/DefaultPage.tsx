import React from "react";

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
    name: "John Doe",
    activity: "Active",
    lastActive: "2025-02-16 14:30",
    location: "New York, USA",
    primaryMail: "johndoe@example.com",
    tags: ["Admin", "VIP"],
  },
  {
    name: "Jane Smith",
    activity: "Idle",
    lastActive: "2025-02-15 18:45",
    location: "London, UK",
    primaryMail: "janesmith@example.com",
    tags: ["User", "Subscribed"],
  },
  {
    name: "Michael Johnson",
    activity: "Offline",
    lastActive: "2025-02-14 09:20",
    location: "Berlin, Germany",
    primaryMail: "michaelj@example.com",
    tags: ["Moderator"],
  },
  {
    name: "Alice Brown",
    activity: "Active",
    lastActive: "2025-02-17 10:00",
    location: "Toronto, Canada",
    primaryMail: "aliceb@example.com",
    tags: ["VIP", "Subscribed"],
  },
];

const MembersPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Members List</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-300">
        <table className="min-w-full bg-white">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Activity</th>
              <th className="py-3 px-6 text-left">Last Active</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Primary Mail</th>
              <th className="py-3 px-6 text-left">Tags</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700 text-sm font-light">
            {sampleMembers.map((member, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{member.name}</td>
                <td className="py-3 px-6">{member.activity}</td>
                <td className="py-3 px-6">{member.lastActive}</td>
                <td className="py-3 px-6">{member.location}</td>
                <td className="py-3 px-6 text-blue-600 underline">
                  <a href={`mailto:${member.primaryMail}`}>
                    {member.primaryMail}
                  </a>
                </td>
                <td className="py-3 px-6">{member.tags.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersPage;
