import React, { useState } from "react";
import "../../styles.css";

const sampleMembers = [
  {
    name: "Ian Dooley",
    image: "https://randomuser.me/api/portraits/men/10.jpg", // Sample image URL
    activity: "Active",
    lastActive: "5th May",
    location: "New York, USA",
    primaryMail: "someone@grovio.xyz",
    tags: ["Badge", "VIP"],
  },
  {
    name: "Ian Dooley",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    activity: "Idle",
    lastActive: "Today",
    location: "London, UK",
    primaryMail: "someone@grovio.xyz",
    tags: ["Badge", "Member"],
  },
  {
    name: "Ian Dooley",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    activity: "Offline",
    lastActive: "Yesterday",
    location: "Berlin, Germany",
    primaryMail: "someone@grovio.xyz",
    tags: ["Premium", "Subscribed"],
  },
];

const MembersTable: React.FC = () => {
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sampleMembers.length / rowsPerPage);

  return (
    <div className="table-container">
      <h2>Members List</h2>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name ▼</th>
            <th>Activity ▼</th>
            <th>Last Active ▼</th>
            <th>Location ▼</th>
            <th>Primary Email ▼</th>
            <th>Tags ▼</th>
          </tr>
        </thead>
        <tbody>
          {sampleMembers.map((member, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="name-column">
                <img src={member.image} alt={member.name} className="profile-img" />
                {member.name}
              </td>
              <td>
                <span
                  className={
                    member.activity === "Active"
                      ? "badge badge-green"
                      : member.activity === "Idle"
                      ? "badge badge-blue"
                      : "badge badge-red"
                  }
                >
                  {member.activity}
                </span>
              </td>
              <td>{member.lastActive}</td>
              <td>{member.location}</td>
              <td>
                <a href={`mailto:${member.primaryMail}`}>{member.primaryMail}</a>
              </td>
              <td>
                {member.tags.map((tag, i) => (
                  <span key={i} className="badge badge-blue">
                    {tag}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <div>
          <label>Rows per page:</label>
          <select value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;
