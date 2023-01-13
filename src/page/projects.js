import Header from "../components/header";
import projectList from "../components/projectList";

const projectPage = () => {
  return `
  ${Header()}
  <h1>Project Page </h1>
  ${projectList()}
  `;
};

// nếu muốn lọc .filter((item) => item.id !== 2)
export default projectPage;
