import projectItem from "./projectItem";

const projectList = ({ projects }) => {
  console.log(projects);
  return `
        ${projects
          ?.map((project) => {
            return `${projectItem({project:project})}`;
          })
          .join("")}
    `;
};
export default projectList;
