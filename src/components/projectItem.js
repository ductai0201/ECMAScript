
const projectItem = ({project}) => {
    console.log(project)
  return (
    `<div"><a href="/projectDetail/${project.id}"> ${project.name}</div>`
  ) 
}

export default projectItem