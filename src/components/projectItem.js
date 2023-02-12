const projectItem = ({ project }) => {
  console.log(project);
  // if(!Array.isArray(project) || project.length == 0) return 0;
  return `<div"><a href="/projectDetail/${project.id}"> ${project.name}</div>`;
};

export default projectItem;
