import projectItem from "./projectItem";

const projectList = ({ projects }) => {
  console.log(projects);
  if (!Array.isArray(projects) || projects.length == 0) return null;
  return `
        ${projects
          ?.map((project) => {
            return `${projectItem({ project })}`;
          })
          .join("")}
    `;

  // return projects && projects.length > 0
  //   ? `${projects.map((project) => `<div><a href="/projectDetail/${project.id}">${project.name}</div>`).join("")}`
  //   : '';
};

export default projectList;
