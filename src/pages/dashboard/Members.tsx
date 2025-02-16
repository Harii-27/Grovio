import React, { useState } from "react";
import "../../styles.css";

type Member = {
  name: string;
  image: string;
  activity: string;
  lastActive: string;
  location: string;
  primaryMail: string;
  tags: string[];
};

// Sample data
const ianDooley: Member = {
  name: "Ian Dooley",
  image: "https://randomuser.me/api/portraits/men/10.jpg",
  activity: "Ian Dooley",
  lastActive: "5th May", // Default value, but will be replaced dynamically
  location: "New York, USA",
  primaryMail: "someone@grovio.xyz",
  tags: ["Badge", "Badge", "Badge"],
};

// Generate 4585 sample members
const sampleMembers: Member[] = Array(4585)
  .fill(ianDooley)
  .map((member, index) => ({
    ...member,
    lastActive:
      index % 3 === 0 ? "Today" : index % 3 === 1 ? "Yesterday" : "5th May",
  }));

const MembersTable: React.FC = () => {
  const [members] = useState<Member[]>(sampleMembers);
  const [sortColumn, setSortColumn] = useState<keyof Member | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSort = (column: keyof Member) => {
    const isAsc = sortColumn === column && sortOrder === "asc";
    setSortColumn(column);
    setSortOrder(isAsc ? "desc" : "asc");
  };

  const getSortIcon = (column: keyof Member) => {
    if (sortColumn === column) {
      return sortOrder === "asc" ? " ▲" : " ▼";
    }
  };

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = members.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(members.length / rowsPerPage);

  return (
    <div className="table-container">
      <h2>Members List</h2>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th onClick={() => handleSort("name")}>
              Name {getSortIcon("name")}
            </th>
            <th onClick={() => handleSort("activity")}>
              Activity {getSortIcon("activity")}
            </th>
            <th onClick={() => handleSort("lastActive")}>
              Last Active {getSortIcon("lastActive")}
            </th>
            <th onClick={() => handleSort("location")}>
              Location {getSortIcon("location")}
            </th>
            <th onClick={() => handleSort("primaryMail")}>
              Primary Email {getSortIcon("primaryMail")}
            </th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((member, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="name-column">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-img"
                />
                {member.name}
              </td>
              <td>{member.activity}</td>
              <td>{member.lastActive}</td> {/* Dynamic lastActive value */}
              <td>{member.location}</td>
              <td>
                <a href={`mailto:${member.primaryMail}`}>
                  {member.primaryMail}
                </a>
              </td>
              <td>
                {member.tags.map((tag, i) => (
                  <span
                  key={i}
                  className={`badge ${
                    i % 3 === 0 ? "badge-purple" : i % 3 === 1 ? "badge-red" : "badge-green"
                  }`}
                >
                  {tag}
                </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination & Rows per Page */}
      <div className="pagination-container">
        <div className="rows-per-page">
          <span onClick={() => setShowDropdown(!showDropdown)}>
            {rowsPerPage} per page ▼
          </span>
          {showDropdown && (
            <ul className="dropdown">
              {[10, 25, 50, 100].map((num) => (
                <li
                  key={num}
                  className={num === rowsPerPage ? "active" : ""}
                  onClick={() => {
                    setRowsPerPage(num);
                    setShowDropdown(false);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={num === rowsPerPage}
                    readOnly
                  />
                  {num} per page
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pagination">
          {/* Pagination Info */}
          <span>
            {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, members.length)} of{" "}
            {members.length}
          </span>

          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;
