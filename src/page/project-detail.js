import Header from "../components/header";
import { projectFake } from "../data";

const projectDetail = (id) => {
  const currentProject = projectFake.find((project) => project.id == id);
  console.log(currentProject);
  if (!currentProject) return "Loading....";
  return `
        ${Header()}
       <h1>${currentProject.name} </h1> 
       ${
         currentProject.teams
           ? `<ul>${currentProject.teams
               .map((member) => {
                 return `${member.name}`;
               })
               .join(" ")} </ul>`
           : ""
       }  
       
    `;
};
export default projectDetail;
