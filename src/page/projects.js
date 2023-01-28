import Header from "../components/header";
import projectList from "../components/projectList";
import { projectFake } from "../data";

const projectPage = () => {
  return `
    ${Header()}
      <h1>Project Page </h1>
    ${projectList({projects: projectFake})}
  `;
};

// nếu muốn lọc .filter((item) => item.id !== 2)
export default projectPage;
