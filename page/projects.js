const projectPage = () => {
  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
  ];
  return `Project Page
    ${projects
      .map((item) => {
        return `<div"><a href="/projects/${item.id}"> ${item.name}</div>`;
      })
      .join("")}
`;
};

// nếu muốn lọc .filter((item) => item.id !== 2)
export default projectPage;
