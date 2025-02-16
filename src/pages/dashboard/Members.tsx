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

const sampleMembers: Member[] = [
  {
    name: "Ian Dooley",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    activity: "Active",
    lastActive: "5th May",
    location: "New York, USA",
    primaryMail: "someone@grovio.xyz",
    tags: ["Badge", "VIP"],
  },
  {
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    activity: "Idle",
    lastActive: "Today",
    location: "London, UK",
    primaryMail: "john.smith@example.com",
    tags: ["Badge", "Member"],
  },
  {
    name: "Michael Doe",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    activity: "Offline",
    lastActive: "Yesterday",
    location: "Berlin, Germany",
    primaryMail: "michael.doe@example.com",
    tags: ["Premium", "Subscribed"],
  },
];

const MembersTable: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(sampleMembers);
  const [sortColumn, setSortColumn] = useState<keyof Member | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof Member) => {
    const isAsc = sortColumn === column && sortOrder === "asc";
    const newOrder = isAsc ? "desc" : "asc";

    const sortedData = [...members].sort((a, b) => {
      const aValue = a[column].toString().toLowerCase();
      const bValue = b[column].toString().toLowerCase();
      return newOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });

    setSortColumn(column);
    setSortOrder(newOrder);
    setMembers(sortedData);
  };

  const getSortIcon = (column: keyof Member) => {
    if (sortColumn === column) {
      return sortOrder === "asc" ? " ▲" : " ▼";
    }
  };

  return (
    <div className="table-container">
      <h2>Members List</h2>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th onClick={() => handleSort("name")}>Name {getSortIcon("name")}</th>
            <th onClick={() => handleSort("activity")}>Activity {getSortIcon("activity")}</th>
            <th onClick={() => handleSort("lastActive")}>Last Active {getSortIcon("lastActive")}</th>
            <th onClick={() => handleSort("location")}>Location {getSortIcon("location")}</th>
            <th onClick={() => handleSort("primaryMail")}>Primary Email {getSortIcon("primaryMail")}</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
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
    </div>
  );
};

export default MembersTable;
