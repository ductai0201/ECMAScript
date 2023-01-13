import { projectFake } from "../data";

const projectList = () => {
  return `
        ${projectFake
          .map((item) => {
            return `<div"><a href="/projectDetail/${item.id}"> ${item.name}</div>`;
          })
          .join("")}
    `;
};
export default projectList;
